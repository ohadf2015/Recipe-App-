# # #!/usr/bin/env python
# # # coding: utf-8
print('hi from python')
# import logging
# logname="CF.txt"
# logging.basicConfig(filename=logname,
#                             filemode='a',
#                             format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
#                             datefmt='%H:%M:%S',
#                             level=logging.DEBUG)

# logging.info("Running CF")

# logger = logging.getLogger('CF')









# pip install pyspark
import os
script_dir = os.path.dirname(__file__) #<-- absolute dir the script is in
rel_path = "../data/ratings.csv"
abs_file_path = os.path.join(script_dir, rel_path)



from pyspark.ml.evaluation import RegressionEvaluator
from pyspark.ml.recommendation import ALS
from pyspark.ml.tuning import TrainValidationSplit, ParamGridBuilder
from pyspark.sql import SparkSession
spark=SparkSession.builder.appName("CF").getOrCreate()

from pyspark.sql.functions import col

print('reading data...')
recipes_ratings=spark.read.csv(
    path=abs_file_path,
    header=True,
    sep=",",
    quote='"',
    inferSchema=True,
)


rel_path2 = "../data/newRatings.csv"
abs_file_path = os.path.join(script_dir, rel_path2)


newRatings=spark.read.csv(
    path=abs_file_path,
    header=True,
    sep=",",
    quote='"',
    inferSchema=True,
)


recipes_ratings = recipes_ratings.union(newRatings)
# recipes_ratings.show()

print('done reading data..')

(training,test)=recipes_ratings.randomSplit([0.8,0.2])



#create ALS model
als=ALS(userCol="userId",itemCol="recipeId",ratingCol="rating",coldStartStrategy="drop",nonnegative=True)


#tune model using ParamGridBuilder       
param_grid=ParamGridBuilder()            .addGrid(als.rank,[13])            .addGrid(als.maxIter,[18,19,20])            .addGrid(als.regParam,[.17,.18,.19])            .build()


# show ratings for specific user
# recipes_ratings.where(recipes_ratings.userId == 1400000).show()


#define evaluator as RMSE
evaluator=RegressionEvaluator(metricName="rmse",labelCol="rating",predictionCol="prediction")



# #build cross validation using TrainValidationSplit
tvs=TrainValidationSplit(
    estimator=als,
    estimatorParamMaps=param_grid,
    evaluator=evaluator
)

print('started training the model')
#fit ALS model to training data
model=tvs.fit(training)


#extract best model from the tuning exercise using paramgridbuilder
best_model=model.bestModel


# #best_model

#generate predictions and evaluate using RMSE
predictions=best_model.transform(test)
rmse=evaluator.evaluate(predictions)


# best_model.save(r'./model')


print("RMSE= "+str(rmse))
print("**best model**")
print("  rank:"),best_model.rank
print("  maxIter:"),best_model._java_obj.parent().getMaxIter()
print("  regParam:"),best_model._java_obj.parent().getRegParam()

user_recs=best_model.recommendForAllUsers(30)


# user_recs.select("recommendations.recipeId", "recommendations.rating")



# # def get_recs_for_user(recs):
# # 	Recs should be for a specific user.
# # 	recs = recs.select("recommendations.recipeId", "recommendations.ratings")
# # 	movies = recs.select("recipeId").toPandas().iloc[0,0]
# # 	ratings = recs.select("rating").toPandas().iloc[0,0]
# # 	ratings_matrix = pd.DataFrame(recipes, columns = ["recipeId"])
# # 	ratings_matrix["ratings"] = ratings
# # 	ratings_matrix_ps = sqlContext.createDataFrame(ratings_matrix)
# # 	return ratings_matrix_ps


# # user_recs.foreach(get_recs_for_user)



# user_recs.coalesce(1).write.format('json').save('./json')



# user_recs.show()



# # recipe_recs.write.options(header='True', delimiter=',')  .csv("C:/Users/ohad/Desktop/lastCF_exp/cf.csv")




# # import pyspark
# # def spark_shape(self):
# #     return (self.count(), len(self.columns))
# # pyspark.sql.dataframe.DataFrame.shape = spark_shape
# # def spark_shape(self):
# #     return (self.count(), len(self.columns))
# # pyspark.sql.dataframe.DataFrame.shape = spark_shape


# # user_recs.shape()




# # predictions.select(
# #     "userId", 'recipeId',"prediction","rating").show(n=120, truncate=False)

# # recipes=spark.read.csv(
# #     path=r"C:\Users\ohad\Desktop\lastCF_exp\data\recipesList.csv",
# #     header=True,
# #     sep=",",
# #     quote='"',
# #     inferSchema=True,
# # )
# # recipes_ratings.printSchema()


# recipes_ratings.join(recipes, "recipeID").show(3)

# best_model.save(spark, "C:/Users/ohad/Desktop/lastCF_exp")
# sameModel = MatrixFactorizationModel.load(spark, "C:/Users/ohad/Desktop/lastCF_exp")


print('done recommandations analysis')

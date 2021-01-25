export default {
    async getUserId() {


    let userId=await localStorage.getItem('userId');
    return userId
    }

}

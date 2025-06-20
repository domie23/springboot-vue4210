const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot310o0/",
            name: "springboot310o0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot310o0/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "逍遥大药房管理系统"
        } 
    }
}
export default base

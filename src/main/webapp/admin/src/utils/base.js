const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmso10i/",
            name: "ssmso10i",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmso10i/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学院学生论坛"
        } 
    }
}
export default base

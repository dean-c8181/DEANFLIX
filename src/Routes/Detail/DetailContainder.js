import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

// Router가 기본적으로 정보를 Route에 전달 하기 때문에 Header.js 처럼 withRouter를 사용하여 추가 작업 할 필요가 없음.



export default class extends React.Component{
    constructor(props){
        super(props);
        const {location: { pathname }} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/"),
            activeTab : 0,
        } 
    }


    clickHandler = async(id, event) => {
        await this.setState({
          activeTab: id
        })
        
        this.showTabs(id);
    }

    showTabs = () => {
        const { activeTab } = this.state;
        const siblings = t => [...t.parentElement.children].filter(e => e !== t);
        const sectTab = document.querySelector(`.tbCnt${activeTab}`);
        const tabMenu =  document.querySelector(`.tabBttn${activeTab}`);
        let tabSib = siblings(tabMenu)        
        let sibTab = siblings(sectTab)
        tabMenu.classList.add('on');
        tabSib[0].classList.remove('on');
        //console.log(sibTab[0]);
        sibTab[0].style.left = '-100vw';
        //sibTab.map(sbtb => sbtb.style.left = '-100vw'); -- 모든 형제 요소들일괄 적용
        sectTab.style.left = '0px';
    }

    async componentDidMount(){
        const { 
            match: { 
                params: { id } 
            },
            history: { push },            
        } = this.props;

        // this.isMovie = pathname.includes("/movie/"); - constructor로 이동
        
        const { isMovie } = this.state;
        const parsedId = parseInt(id); // api에서 요구하는 파라미터값은 id이기 때문에 string으로 변환되어 있는거 number로 바꾸기.
        //console.log(id); console.log(typeOf id);

        if(isNaN(parsedId)){    // 파라미터가 숫자가 아니면
           return push("/");    // return으로 home화면으로 보내면 함수를 끝내서 필요 없는 작업을 안하게 함.
        }

        let result = null;

        try{
            if(isMovie){
                //result = await moviesApi.movieDetail(parsedId);
                /*const request = await moviesApi.movieDetail(parsedId);
                const result =  requset.data;
                console.log(request.data); */
                ({data: result} =  await moviesApi.movieDetail(parsedId));                
            }else{
                ({data: result} = await tvApi.showDetail(parsedId));
                //result = await tvApi.showDetail(parsedId);
            }
           // console.log(result);
        } catch{
            this.setState({ error: "Can't find anything." });
        } finally{
            this.setState({ loading: false, result });
            document.querySelector(`.tbCnt1`).style.left = '-100vw'
        }

        
    }


    render(){
        //console.log(this.props);
        const {result, error, loading, activeTab} = this.state;

        return(
            <DetailPresenter 
                result={result}
                error={error}
                loading={loading}    
                activeTab={activeTab}     
                clickHandler={this.clickHandler}  
            >
            </DetailPresenter>
        )
    }
}
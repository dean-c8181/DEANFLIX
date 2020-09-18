import React from "react";
import DetailPresenter from "./DetailPresenter";

// Router가 기본적으로 정보를 Route에 전달 하기 때문에 Header.js 처럼 withRouter를 사용하여 추가 작업 할 필요가 없음.



export default class extends React.Component{
    state = {
        result: null,
        error: null,
        loading: true
    }

    async componentDidMount(){
        const { 
            match: { 
                params: { id } 
            },
            history:{ push } 
        } = this.props;
        const parsedId = parseInt(id); // api에서 요구하는 파라미터값은 id이기 때문에 string으로 변환되어 있는거 number로 바꾸기.
        //console.log(id); console.log(typeOf id);

        if(isNaN(parsedId)){    // 파라미터가 숫자가 아니면
           return push("/");    // return으로 home화면으로 보내면 함수를 끝내서 필요 없는 작업을 안하게 함.
        }        
    }

    render(){
        //console.log(this.props);
        const {result, error, loading} = this.state;

        return(
            <DetailPresenter 
                result={result}
                error={error}
                loading={loading}            
            >
            </DetailPresenter>
        )
    }
}
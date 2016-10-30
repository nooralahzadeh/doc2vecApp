var React=require('react');
var Word2VecForm=require('Word2VecForm');
var Word2VecMessage=require('Word2VecMessage');
var OpenApiCall=require('OpenApiCall');
var ErrorModel=require('ErrorModel');

var Word2Vec=React.createClass({

  getInitialState:function(){
    return {
      isLoading:false
    }
  },

  handleSearch: function(words){
    var that=this;
    this.setState({
      isLoading:true,
      errorMessage: undefined,
      words:undefined,
      similares:undefined
    });
    OpenApiCall.getMostSimilar(words).then(function(similares){

      that.setState({
      words:words,
      similares:similares,
      isLoading:false,
     });
   },function(e){
     that.setState({
       isLoading:false,
       errorMessage:e.message
     });

   });

  },

  componentDidMount: function(){

    var word=this.props.location.query.positive;
    if(word && word.length>0){
      this.handleSearch(word);
      window.location.hash='#/';
    }
  },

  componentWillReceiveProps: function(newProps){

    var word=newProps.location.query.positive;
    if(word && word.length>0){
      this.handleSearch(word);
      window.location.hash='#/';
    }
  },

  render: function(){
    var {isLoading,similares,words,errorMessage}=this.state;

    function renderMessage() {

      if(isLoading){
        return <h3 className="text-center"> Fetching from Word2Vec... </h3>;
      } else if(words && similares){

        return <Word2VecMessage similares={similares} words={words}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage==='string'){
        return (
          <ErrorModel  message={errorMessage}/>
        )
      }
    }
    return(

      <div>

        <h4 className="text-center page-title color">Get similar words/documents</h4>
        <Word2VecForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }

});

module.exports=Word2Vec;

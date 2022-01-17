function create_question(english_word, japanese_word) {
    return {
      english: english_word,
      japanese: japanese_word,
      date: null,
      count: 0,
    };
  }
  
  function getNow() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const day = ('00' + date.getDate()).slice(-2);
  
    return year + month + day;
  }
  
  var questions = [];
  var question;
  var hoge ;

  function create() {
    // データ取得
    const tmp = localStorage.getItem('questions');
    if (tmp) {
      console.log('既存データ読み込み');
      questions = JSON.parse(tmp);
    } else {
 

     
   }
    // 関数show 呼び出し
    show ();
    
  }
  //問題表示　カウントが入っている物を優先的に表示する。
  function show(){
    //　お試し
    var results = questions.filter((question) => question['count'] != 0 )
    var index = Math.floor(Math.random() * (results.length))
    console.log('お試し');
    console.log(index);
    console.log(questions);
    console.log(results);
    console.log(results[index]);
    document.getElementById('sample').innerHTML = results[index]['english'];
    // お試し
  
  }
  
  //結果の条件分岐の処理
  function result() {
   const answer = document.getElementById ('kotae').value;
    if(answer == question['japanese']){
      alert("正解");
      hoge = answer

      
      
   //データ保存の処理
      question['date'] = getNow();
      question['count'] = question['count'] + 1;
      const json = JSON.stringify(questions, undefined, 1);
      localStorage.setItem('questions', json);
      console.log(questions);

    }else{
      alert("不正解");
    }
    
    
  }
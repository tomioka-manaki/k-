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

function create() {
  // データ取得
  const tmp = localStorage.getItem('questions');
  if (tmp) {
    console.log('既存データ読み込み');
    questions = JSON.parse(tmp);
  } else {
    console.log('新データ作成');
    questions.push(create_question('apple', 'リンゴ'));
    questions.push(create_question('ant', 'アリ'));
    questions.push(create_question("north", "北"));
    questions.push(create_question("south", "南"));
    questions.push(create_question("west", "西"));
    questions.push(create_question("September", "9月"));
    questions.push(create_question("anniversary", "記念日"));
    questions.push(create_question("bargain", "安売り"));
    questions.push(create_question("bath", "入浴"));
    questions.push(create_question("breakfast", "朝食"));
    questions.push(create_question("burial", "埋葬"));
    questions.push(create_question("care", "世話"));
    questions.push(create_question("celebration", "祝賀"));
    questions.push(create_question("celebration", "式"));
    questions.push(create_question("chore", "雑用"));
    questions.push(create_question("cleaning", "掃除"));
    questions.push(create_question("communication", "伝達"));
    questions.push(create_question("congratulation", "祝賀"));
    questions.push(create_question("conversation", "会話"));
  }
    print();
}

function print() {
  question = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById('sample').innerHTML = question['english'];

  question['date'] = getNow();
  question['count'] = question['count'] + 1;
  // 保存
  const json = JSON.stringify(questions, undefined, 1);
  localStorage.setItem('questions', json);
  console.log(questions);
}
function Translation (){
  document.getElementById('sample').innerHTML = question['japanese'];


}




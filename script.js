const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result')
const weightConditionEl = document.getElementById('weight-condition')

function calcualateBMI(){
   const heightValue = document.getElementById('height').value/100
   const weightValue = document.getElementById('weight').value
    const bmivalue =weightValue/(heightValue*heightValue)
    bmiInputEl.value = bmivalue

    if(bmivalue<18.5){
        weightConditionEl.innerText= 'UNDERWEIGHT, Consider increasing your calorie intake with nutrient-rich foods like nuts, seeds, and lean proteins. You Consult with a healthcare professional for personalized advice.'
}
else if(bmivalue >= 18.5 && bmivalue<=25){
    weightConditionEl.innerText ='NORMAL WEIGHT, Maintain your healthy lifestyle with a balanced diet and regular physical activity. Keep up the good work!'
}
else if(bmivalue >= 25 && bmivalue<=29.9){
    weightConditionEl.innerText ='OVERWEIGHT, Focus on portion control and incorporate more fruits, vegetables, and whole grains into your diet. Aim for regular exercise and You can consult with a healthcare professional for personalized advice.'
}
else if(bmivalue>=30){
    weightConditionEl.innerText = 'OBESE, Prioritize lifestyle changes such as healthy eating habits and regular physical activity.You can Seek support from a healthcare professional or a registered dietitian to develop a personalized plan for weight management.'
}
}
btnEl.addEventListener('click',calcualateBMI)
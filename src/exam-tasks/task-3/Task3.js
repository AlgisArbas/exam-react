import React, {useState} from 'react';

function Task3() {
    // [age, setAge] = useState()
    // const respond = (age) => {
    //    return age >= 18 ? "Dėkojame, kad užsiregistravote" : "Deja, registracija negalima.  Registruotis galima tik nuo 18 metų"
    // }
    const ageSet = (e) => {
        console.log(e)
    }

  return (
    <div>
      <h3>Task 3</h3>
        <form className='task3form'>
            <input type='text' placeholder='name'/>
            <input type='text' placeholder='surname'/>
            <input type='number' placeholder='age'/>
            <button onSubmit='{}' type='submit'>Registruoti</button>
            <p>{}</p>
        </form>
    </div>
  );
}

export default Task3;

/* TASK 3
Sukurkite forma, kurioje vartotojas galės nurodyti
- vardą
- pavardę
- amžių

Vartotojui užpildius formą ir paspaudus "Pateikti", po forma 
atsiras atsiras pasisveikinimas:
- Jei asmuo yra 18 m. ir vyresnis: "Dėkojame, kad užsiregistravote"
- Jei asmuo yra 17 m. ir jaunesnis: "Deja, registracija negalima. 
Registruotis galima tik nuo 18 metų"

Pastaba: panaudokite useState
*/

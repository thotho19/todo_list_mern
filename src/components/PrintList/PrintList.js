import React from 'react';
import './PrintList.css';
const PrintList = (props) => {

const DeleteById = (id)=>{
    props.delete(id)
}

function checkRTL(s){           
    var ltrChars        = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
        rtlChars        = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
        rtlDirCheck     = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');

    return rtlDirCheck.test(s);
};
    return (
       <ul>
           {props.mylist.map((goal)=>{
               let languageCheck = checkRTL(goal.text[0]);
               if(languageCheck === false){
                return <li key={goal.id}>
                <span className="span" onClick={()=>{DeleteById(goal.id)}}>
                    <i className='fa fa-trash'></i>
                </span>{goal.text}</li>
               }else{
                return <li key={goal.id}>
                <span className="span" onClick={()=>{DeleteById(goal.id)}}>
                    <i className='fa fa-trash'></i>
               </span><span className="spanData">{goal.text}</span></li>
               }
           })}
       </ul>
    );
}
 
export default PrintList;


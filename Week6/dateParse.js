const input_string1 = "10-11-2023";
const input_string2 = "24-5-23";
const wrong_string = "10-11";

function strToDate(dateStr){
    const tokens = dateStr.split("-");
    if (tokens.length < 3){
        console.log("Input string has wrong format!");
        return null;
    }
    else{
        let yearStr = tokens[2];
        let monthStr = tokens[1];
        let dayStr = tokens[0];

        if (yearStr.length < 4)
            yearStr = "20" + yearStr;           

        if (monthStr.length < 2)
            monthStr = "0" + monthStr;

        if (dayStr.length < 2)
            dayStr = "0" + dayStr;

        //let's use ISO short format
        const formattedStr = yearStr + "/" + monthStr + "/" + dayStr;
        console.log("formattedStr=" + formattedStr);
        return new Date(formattedStr);
    }
}

const stringsToParse = [input_string1, input_string2, wrong_string];
for(let i = 0; i < stringsToParse.length; i++){
    const dt = strToDate(stringsToParse[i]);
    if (dt != null){
        console.log("Date UTC:" + dt.toUTCString());
        console.log("Year:" + dt.getFullYear() + "; Month:" + dt.getMonth() +"; Day:" + dt.getDay());
    }
}






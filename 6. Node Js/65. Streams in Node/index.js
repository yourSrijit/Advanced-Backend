import {readFile,writeFile} from 'fs/promises';

let filePath=new URL('./index.txt',import.meta.url);
let newFilePath=new URL('./file2.txt',import.meta.url)
let content=await readFile(filePath ,{encoding:'utf-8'})
console.log(content);


const data={
    name:"srijit bera",
    age:25,
    city:"kolkata"
}

for(const [key,value] of Object.entries(data)){
    content =content.replace(`{{${key}}}`,value)
}
console.log(content);

//writeFile
await writeFile(newFilePath,content)
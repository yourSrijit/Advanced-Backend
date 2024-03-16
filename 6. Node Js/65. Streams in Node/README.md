# Stream in Node js
## Read file 

```
import {readFile} from 'fs/promises';
/// import.meta.url this will return the current folder path
const filePath=new URL('./index.txt',import.meta.url);
const content=await readFile(filePath ,{encoding:'utf-8'})
console.log(content);
```
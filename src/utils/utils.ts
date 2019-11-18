const crop = (str:string, lenght = 50, dots=false) => {
   if(str.length <= lenght) return str
   let output = str.substr(0,lenght)
   output =  output.substr(0,output.lastIndexOf(' '))
   return !dots ? output : `${output}...`
}

export {crop}
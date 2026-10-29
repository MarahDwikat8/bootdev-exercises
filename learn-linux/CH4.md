# Learn Linux -Note 
## Chapter 4: 

### Lessons 1:
help command 
--help 
-h 
help 
grep --help

assig:
mortifiedplay19:~$ grep --help                                                  
grep - print lines that match patterns                                          
                                                                                
Usage: grep [OPTION]... PATTERN [FILE]...                                       
                                                                                
Options:                                                                        
  -E, --extended-regexp    PATTERN is an extended regular expression            
  -P, --perl-regexp        PATTERN is a Perl regular expression                 
  -F, --fixed-strings      PATTERN is a set of newline-separated strings        
  -i, --ignore-case        ignore case distinctions                             
  -v, --invert-match       select non-matching lines                            
  -w, --word-regexp        match only whole words                               
  -x, --line-regexp        match only whole lines                               
  -c, --count              print only a count of matching lines                 
  -l, --files-with-matches print only names of files with matches               
  -L, --files-without-match print names of files with no matches                
  -m NUM, --max-count=NUM  stop after NUM matches                               
  -n, --line-number        print line number with output lines                  
  -h, --no-filename        suppress the file name prefix on output              
  -o, --only-matching      show only nonempty parts of lines that match         
  -q, --quiet, --silent    suppress all normal output                           
  -r, -R, --recursive      search directories recursively                       
  -A NUM                   print NUM lines of trailing context                  
  -B NUM                   print NUM lines of leading context                   
  -C NUM                   print NUM lines of context                           
  -e PATTERN               use PATTERN for matching                             
      --include=GLOB       search only files matching GLOB                      
      --exclude=GLOB       skip files matching GLOB                             
      --exclude-dir=DIR    skip directories matching DIR                        
      --help               display this help and exit    


### Lessons 2:
flags of command
-l long
-a all 
-al compain between long and all
single - 
multi --

### Lessons 3:
command can take tow arg or single 
assig:

cat worldbanc/public/key.txt
mv worldbanc/public/key.txt worldbanc/private/
ls worldbanc/private

### Lessons 4:
Exit Code >> Return code 
0 for seccess 
1 for error

$? to know if the command is run or not 

; run 2 command in one line 
&& first comma is ru nwhen secound is run 

assig :
mortifiedplay19:~$ unset WARN_MESSAGE                                           
mortifiedplay19:~$ unset WARN_FROM_NAME                                         
mortifiedplay19:~$ bash worldbanc/private/bin/warn.sh                           
bash: worldbanc/private/bin/warn.sh: No such file or directory                  
mortifiedplay19:~$ echo $?                                                      
127                                                                             
mortifiedplay19:~$  

### Lessons 5:
echo print output>>stdout
assig 
mortifiedplay19:~$ grep "Marshal" worldbanc/private/transactions/2020.csv   
### Lessons 6:
stderr>>error massage
>stdout
2>stderr
### Lessons 7:
stdin >>defult place where the programm read ther input 
input <
wc < input.txt 
assig :
mortifiedplay19:~$ worldbanc/private/bin/worldbanc.sh < worldbanc/answers.txt  
### Lessons 8:
you can pipe the output of one program into the input of another program
|
echo "Have you heard the tragedy of Darth Plagueis the Wise?" | wc -w
# 10

assig :mortifiedplay19:~$ grep -R "Bob" worldbanc/private/transaction --exclude-dir="ba
ckups" |wc -l                                                                   
                
### Lessons 9:
is a simple set of principles that have guided the development of Unix-like operating systems for decades
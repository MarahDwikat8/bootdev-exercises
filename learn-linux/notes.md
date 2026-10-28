# Learn Linux -Note 
## Chapter 1 : The command line

### Lessons 1:
**echo "Hello World": anything written inside it will be converted into a print statement to display the output.
PS: I use a Kali Linux

### Lessons 2:
what is shell : REPL s 
An interface through which commands are executed.
**expr : Mathematical operation.
expr 1 + 2 
expr 3 - 1 

### Lessons 3:
what is the different between CMD and GUI
CMD : The programmer write a statment
GUI: because it is easier for the programmer to use, as it consists of icons and buttons.

**whoami :marah >>It is visible to the user.


### Lessons 4: as simple as what is terminal >> program depends on text command

### Lessons 5:
Bach Lang 
name= "marah" false we have space 
name="marah" correct 
echo $name >> print marah

assig >>
$ bankname="WorldBanc"
$ founded= "1969"
$ceo="Jeff Gates"
$ $bankname was founded in $founded by $ceo
result=WorldBanc was founded in 1969 by Jeff Gates



### Lessons 6:
$history >>It displays the commands i previously entered, like an archive.

assig >> show all command erite prev 

### Lessons 7:
arrows key >>I can easily navigate between previously entered commands.

clear command delete all command or i can use ctrl + L
assig >> i do it in kali




***********************************************************


## Chapter 2 : File System 

### Lessons 1:
deffinetion what is a file system 
file system start from the root
**pwd :/home/marah  current working directory.
### Lessons 2:
/ represents the root directory.
 home is the name of a directory inside the root directory.
 **ls:prints the contents of a directory.
### Lessons 3:
** cd :change the dir 
** ..:back to the prev dir

### Lessons 4:
 relative filepaths which are paths that take your current directory into account بيبدأ من مكاني الحالي 
 ex cars/fords/mustang.txt
 absolute path is a path that starts at the root of the filesystem
 بيبدأمن جذر النظام دائما 
 .  المجلد الحالي 
 .. المجلد الي فوق
 ~مجلد المستخدم  home 
### Lessons 5:
** cat : shpw the content of the file 
### Lessons 6:
as example ls w +tab complet the full namefor me 
CLI like git shell cmd etc..
### Lessons 7:
The head command prints the first n lines of a file
head -n 10 file1.txt

The tail command prints the last n lines of a file.
tail -n 10 file1.txt

### Lessons 8:
The more and less commands let you view the contents of a file
less use always 
more if the server is old 
Press the spacebar to move down one page
Press b to move up one page
Press / to search
Press q to quit back to your shell prompt

### Lessons 9:
touch :to creat a new file 
***touch new_file.txt
assig :
mortifiedplay19:~$ cd worldbanc/public/products/credit_cards                                    
mortifiedplay19:~/worldbanc/public/products/credit_cards$ touch credithistory.txt               
mortifiedplay19:~/worldbanc/public/products/credit_cards$ ls                                    
credithistory.txt                                                                               
creditplus.txt                                                                                  
economypoints.txt                                                                               
freedomunited.txt                                                                               
jointrewardsplux.txt                                                                            
tbills.txt                                                                                      
travelrewards.txt                                                                               
worldbanccard.txt                                                                               
mortifiedplay19:~/worldbanc/public/products/credit_cards$ 


### Lessons 10:
The "make directory" command creates a new directory inside (or relative to) the current directory. 
يعني creat a folder 

mkdir my_directory
assig :
mortifiedplay19:~$ cd worldbanc/public/products/credit_cards                                    
mortifiedplay19:~/worldbanc/public/products/credit_cards$ ls                                    
creditplus.txt                                                                                  
economypoints.txt                                                                               
freedomunited.txt                                                                               
jointrewardsplux.txt                                                                            
shortterm.txt                                                                                   
travelrewards.txt                                                                               
worldbanccard.txt                                                                               
mortifiedplay19:~/worldbanc/public/products/credit_cards$ cd ..                                 
mortifiedplay19:~/worldbanc/public/products$ mkdir cds                                          
mortifiedplay19:~/worldbanc/public/products$ ls                                                 
cds                                                                                             
credit_cards                                                                                    
mortifiedplay19:~/worldbanc/public/products$ 

### Lessons 11:
The move command moves a file or directory from one location to another
1.Renaming a file
2.Moving a file from the current directory to another nested directory
3.Moving a file from the current directory, to the parent directory

assign :
mortifiedplay19:~$ mv worldbanc/public/products/credit_cards/shortterm.txt worldbanc/public/prod
ucts/cds                                                                                        
mortifiedplay19:~$ ls worldbanc/public/products/cds                                             
shortterm.txt                                                                                   
mortifiedplay19:~$ 

### Lessons 12:
rm some_file.txt delet file 
rm -r some_directory delet folder 

assig:
mortifiedplay19:~$ cd worldbanc/private                                                         
mortifiedplay19:~/worldbanc/private$ cat passwords/passwords.txt                                
12345                                                                                           
thepasswordonmyluggage                                                                          
f00f1ghters                                                                                     
b00kBook                                                                                        
b00kcaseBookcase                                                                                
pa$$w0rd                                                                                        
correcthorsebatterystaple                                                                       
higlety7igelty                                                                                  
1234person1234                                                                                  
gandalfthegrey                                                                                  
mortifiedplay19:~/worldbanc/private$ rm -r  passwords                                           
mortifiedplay19:~/worldbanc/private$ ls                                                         
logs               

### Lessons 13:
The copy command does what you would (hopefully) expect: it copies a file from one location to another.

for file cp source_file.txt destination/
for folder cp -R my_dir new_dir

assig:
mortifiedplay19:~$ cd worldbanc/private/transactions/                                          
mortifiedplay19:~/worldbanc/private/transactions$ ls                                           
2020.csv                                                                                       
2021.csv                                                                                       
2022.csv                                                                                       
2023.csv                                                                                       
backups                                                                                        
mortifiedplay19:~/worldbanc/private/transactions$ ls backups                                   
2021.csv                                                                                       
2022.csv                                                                                       
2023.csv                                                                                       
mortifiedplay19:~/worldbanc/private/transactions$ cp 2020.csv transactions/                    
mortifiedplay19:~/worldbanc/private/transactions$ ls                                           
2020.csv                                                                                       
2021.csv                                                                                       
2022.csv                                                                                       
2023.csv                                                                                       
backups                                                                                        
transactions                                                                                   
mortifiedplay19:~/worldbanc/private/transactions$ rm transactions                              
mortifiedplay19:~/worldbanc/private/transactions$ ls                                           
2020.csv                                                                                       
2021.csv                                                                                       
2022.csv                                                                                       
2023.csv                                                                                       
backups                                                                                        
mortifiedplay19:~/worldbanc/private/transactions$ cp 2020.csv backups/                         
mortifiedplay19:~/worldbanc/private/transactions$ ls                                           
2020.csv                                                                                       
2021.csv                                                                                       
2022.csv                                                                                       
2023.csv                                                                                       
backups                                                                                        
mortifiedplay19:~/worldbanc/private/transactions$ ls backups                                   
2020.csv                                                                                       
2021.csv                                                                                       
2022.csv                                                                                       
2023.csv  

### Lessons 14:
answerd a qustion

### Lessons 15:
The grep command allows you to search for text in files.
grep "hello" words.txt
assig :
mortifiedplay19:~$ grep  "CRITICAL"  worldbanc/private/logs/2024-01-10.log                      
2024-01-10 01:10:27 CRITICAL: Boots is loose in the server room.                                
2024-01-10 05:58:18 CRITICAL: Server is on fire, please evacuate.                               
2024-01-10 20:13:04 CRITICAL: Someone rm -rf'd the root directory.                              
2024-01-10 20:19:37 CRITICAL: Database files are corrupt.                                       
mortifiedplay19:~$    

### Lessons 16:

grep "hello" hello.txt hello2.txt mult 
grep -r "hello" . serch for all folder  الفرعي 

assig mortifiedplay19:~$ grep -r  "CRITICAL" worldbanc/private/logs                                  
worldbanc/private/logs/2024-01-10.log:2024-01-10 01:10:27 CRITICAL: Boots is loose in the serve
 room.                                                                                         
worldbanc/private/logs/2024-01-10.log:2024-01-10 05:58:18 CRITICAL: Server is on fire, please e
acuate.                                                                                        
worldbanc/private/logs/2024-01-10.log:2024-01-10 20:13:04 CRITICAL: Someone rm -rf'd the root d
rectory.                                                                                       
worldbanc/private/logs/2024-01-10.log:2024-01-10 20:19:37 CRITICAL: Database files are corrupt.
worldbanc/private/logs/2024-01-11.log:2024-01-11 00:03:24 CRITICAL: Someone rm -rf'd the root d
rectory.                                                                                       
worldbanc/private/logs/2024-01-11.log:2024-01-11 17:03:14 CRITICAL: Security scan is being mali
iously manipulated.                                                                            
worldbanc/private/logs/2024-01-12.log:2024-01-12 00:04:07 CRITICAL: Boots is out of Salmon agai
.                                                                                              
worldbanc/private/logs/2024-01-13.log:2024-01-13 00:03:08 CRITICAL: Power to the main datacente
 has been lost. Attempting to reconnect.                                                       
worldbanc/private/logs/2024-01-14.log:2024-01-14 00:02:58 CRITICAL: No one paid Dennis Nedry fo
 his work. T-Rex released.                                                                     
worldbanc/private/logs/2024-01-15.log:2024-01-15 00:03:57 CRITICAL: Worldbanc monitoring system
 offline.                                                                                      
worldbanc/private/logs/2024-01-16.log:2024-01-16 00:05:21 CRITICAL: Kernel panic - not syncing:
VFS: Unable to mount root fs on unknown-block(0,0).                       

### Lessons 17:
he find command is a powerful tool for finding files and directories by name, not by their contents

mortifiedplay19:~$ cd worldbanc                                                                 
mortifiedplay19:~/worldbanc$ find public/products -name "*joint"                                
mortifiedplay19:~/worldbanc$ find public/products -name "*joint*"                               
public/products/accounts/jointchecking.txt                                                      
public/products/accounts/jointsavings.txt                                                       
public/products/credit_cards/jointrewardsplux.txt                                               
public/products/loans/jointloanshark.txt                                                        
mortifiedplay19:~/worldbanc$  


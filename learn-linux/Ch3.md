# Learn Linux -Note 
## Chapter 3: 

### Lessons 1:
different between Compiled vs. Interpreted

answer a qustion 
### Lessons 2:
assig
mortifiedplay19:~$ ./worldbanc/private/bin/genids.sh                                            
ID-7fa1f702                                                                                     
ID-ff07bfdc                                                                                     
ID-bac141e5                                                                                     
ID-6eedc4f8                                                                                     
ID-5f748f2f                                                                                     
ID-c971eb52                                                                                     
ID-634a91e3                                                                                     
ID-85c81136                                                                                     
ID-31f933e6                                                                                     
ID-6b1005f1                                                                                     
ID-974ada09                                                                                     
ID-c4938de1         

### Lessons 3:
for Interpreted file 
assig
mortifiedplay19:~$ cat ./worldbanc/private/bin/genids.sh                                        
#!/usr/bin/env bash                                                                             
                                                                                                
generate_fake_id() {                                                                            
    counter=$1                                                                                  
    echo -n "ID-"                                                                               
    echo "fixed_seed_$counter" \                                                                
        | cksum \                                                                               
        | cut -d ' ' -f 1                                                                       
}                                                                                               
                                                                                                
for i in $(seq 1 12); do                                                                        
    generate_fake_id $i                                                                         
done   

### Lessons 4:
the different between sh bash zash
answer a qustion 
### Lessons 5:
env var
env :show all var on your shell

assig:
mortifiedplay19:~$ cat ./worldbanc/private/bin/warn.sh                                             
#!/bin/sh                                                                                          
                                                                                                   
# This script is used to print nice warning messages                                               
# branded in worldbanc style                                                                       
                                                                                                   
echo "============================================"                                                
echo "=========== WORLDBANC WARNING =============="                                                
echo "============================================"                                                
echo "$WARN_MESSAGE"                                                                               
echo "============================================"                                                
echo "From: $WARN_FROM_NAME"                                                                       
echo "============================================"                                                
                                                                                                   
if [ -z "$WARN_MESSAGE" ]; then                                                                    
    echo "WARN_MESSAGE is not set. Exiting with error."                                            
    exit 69                                                                                        
fi                                                                                                 
                                                                                                   
if [ -z "$WARN_FROM_NAME" ]; then                                                                  
    echo "WARN_FROM_NAME is not set. Exiting with error."                                          
    exit 69                                                                                        
fi                                                                                                 
mortifiedplay19:~$ export  WARN_MESSAGE="The auditor is here"                                      
mortifiedplay19:~$ export  WARN_FROM_NAME="Your worst nightmare"                                   
mortifiedplay19:~$ bash worldbanc/private/bin/warn.sh                                              
============================================                                                       
=========== WORLDBANC WARNING ==============                                                       
============================================                                                       
The auditor is here                                                                                
============================================                                                       
From: Your worst nightmare                                                                         
============================================                                                       
mortifiedplay19:~$         
### Lessons 6:
assign:
mortifiedplay19:~$ echo $PATH                                                                       
/usr/bin:/bin                                                                                       
mortifiedplay19:~$                                                                                  
                   
### Lessons 7:

assig :
mortifiedplay19:~$ export PATH="/usr/bin:/bin"                                                     
mortifiedplay19:~$ echo $PATH                                                                      
/usr/bin:/bin                                                                                      
mortifiedplay19:~$ export PATH="$PATH:$HOME/worldbanc/private/bin"                                 
mortifiedplay19:~$ echo $PATH                                                                      
/usr/bin:/bin:/home/user/worldbanc/private/bin                                                     
mortifiedplay19:~$ cd ~                                                                            
mortifiedplay19:~$ genids.sh                                                                       
ID-7fa1f702                                                                                        
ID-ff07bfdc                                                                                        
ID-bac141e5                                                                                        
ID-6eedc4f8                                                                                        
ID-5f748f2f                                                                                        
ID-c971eb52                                                                                        
ID-634a91e3                                                                                        
ID-85c81136                                                                                        
ID-31f933e6                                                                                        
ID-6b1005f1                                                                                        
ID-974ada09                                                                                        
ID-c4938de1   



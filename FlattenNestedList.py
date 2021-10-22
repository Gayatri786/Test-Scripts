import os
import sys
#----------------------------------------------------------# 
#Function defintion to process the nested list
def process_list(item):
    #print("Processing the list")
    for i in item:           
        if isinstance(i, list) == True:
            process_list(i)        #the element is a list to recursively call the function
        else:
            flatten_array.append(i)   #the element is an integer so add to the list
    #print("End of Processing the list")
  #----------------------------------------------------------# 
#Defintion to create Test samples
def test_samples(listall):
    #print("Entry into Test Samples")
    lista = [1,2,3,4]   #single list
    listb = [5,6,7]     #single list
    listc = [8,9]       #single list
    listd = [1,2,3,lista]  #elements before list 
    liste = [listd, 25,35] #elements after list
    listf = [45,65, liste] #elements before list 
    listg = [listd, 75, 85, listd, 95, listf]   #nested lists
    #print("Following are the test cases")
    listall.append(lista)    #List all is the mother list of all the above lists.
    listall.append(listb)
    listall.append(listc)
    listall.append(listd)
    listall.append(liste)
    listall.append(listf)
    listall.append(listg)
    #print("Printing Sample lists:")
    #for item in listall:
        #print(item)
    #print("End of Sample list:")
    #print("Exit into Test Samples")
  #----------------------------------------------------------#  
#Body of the Code
#Begin variable declaration
flatten_array = []  #Output Flatten List
listall = []  #Input Nested List
i = 0  #Test counter
#End of variable declaration

#Call the processing function
print("Test by passing an empty list")
#calling the function or method of process_list
process_list(listall)
print("Test Case", i, ":", flatten_array)
#pass the test samples
test_samples(listall)
i = i+1

print("Testing flatten array function for various test samples")
#Call to processing

for each in listall:
    process_list(each)
    print("Test Case", i, ":", flatten_array)
    flatten_array = []
    i = i+1

process_list(listall) 
print("Test Case", i, ":",flatten_array)

print("End of Testing -- Thank You")  

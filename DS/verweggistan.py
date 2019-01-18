# n= int(input())

def maxProfit(a,array):
    dynamicArray=[0]*20
    dynamicArray[0]=10-array[0]
    #print("Value of dynamicArray"+ " "+ str(dynamicArray[0]))
    counter=1
    for i in array[1:]:
        dynamicArray[counter]=10-i+dynamicArray[counter-1]
        #print(dynamicArray[counter])
        counter+=1
    maxProfit=max(dynamicArray)
    indexOfMaxProfit = [i for i, x in enumerate(dynamicArray) if x == maxProfit]
    if (maxProfit<=0):
        return 0
    else:
        return maxProfit, indexOfMaxProfit
# while (n!=0):
#     a= int (input())
#     array = input()

print(maxProfit(6,[12,3,10,7,16,5]))
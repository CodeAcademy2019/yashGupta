import unittest
import verweggistan

class testVerweggistan(unittest.TestCase):
    def test_maxProfit(self):
        result= verweggistan.maxProfit(6, [12,3,10,7,16,5])
        self.assertEqual(result, (8, [3]))
        

        # result1 =verweggistan.maxProfit(6, [1,2,3,10,15,6])
        # self.assertEqual(result, 24)



# // JS 
# // let verweggistan=require('./verweggistan.js');

# // describe('maxProfit', ()=>{

# // })
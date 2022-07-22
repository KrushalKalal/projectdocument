#1st Page

1. List of Collection Category
http://localhost:7800/collectiontype

2. List of Brand
http://localhost:7800/brandlist

3. List of ImageList
http://localhost:7800/imagecollection

4. List of ImageCollection related to Collection Category
http://localhost:7800/imagecollection?collectionId=3

5. List of ImageCollection related to Brand
http://localhost:7800/imagecollection?brandId=1

6. List of ImageCollection related to discount
http://localhost:7800/imagecollection?discountId=1


#2nd Page

7. List of Products related to Brand
http://localhost:7800/products?brandId=1

8. Product on basis of Brand & Size
http://localhost:7800/filter/1?sizeId=2

9. Product on basis of Brand & Gender
http://localhost:7800/filter/1?genderId=1

10. Product on basis of Brand & Ocation
http://localhost:7800/filter/1?occasionId=1


#3rd Page 

11. Detail of the Product
http://localhost:7800/details/1


#4th Page

12. Product Details
(POST) http://localhost:7800/productItem
{"id": [3,6,8]}

13. Place Order 
(POST) http://localhost:7800/placeOrder
{
    "order_id": 5,
    "name": "Damini",
    "email": "damini@gmail.com",
    "address": "Hno 23,Sector 1",
    "phone": 768768686,
    "cost": 2787,
    "menuItem":[12,16,18],
    "status": "Pending"
}


#5th Page

14. List Of Order Placed
http://localhost:7800/orderList

15. List of Order Placed related to Email
http://localhost:7800/orderList?email=krushal@gmail.com

16. Update Order Details with Payment
(PUT) http://localhost:7800/updateOrder/1
{
     "status": "TXN Successful",
     "bank_name": "AXIS Bank",
     "date": "12/07/2022"
}

17. Delete Order
(DELETE) http://localhost:7800/deleteOrder/6



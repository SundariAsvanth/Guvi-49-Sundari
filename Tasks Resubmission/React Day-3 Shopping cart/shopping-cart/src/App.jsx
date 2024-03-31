
import React, { useState } from 'react';
import './App.css';
import ShowCourseComponent from './Show';
import UserCartComponent from './User';
import img1 from './assets/tshirt.png';
import img2 from './assets/bag.jpg';
import img3 from './assets/hoodie.jpg';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'T-shirt', 
          price: 499, 
          image: img1
        },
        { id: 2, 
          name: 'Bag', 
          price: 699, 
          image: img2
        },
        { id: 3, 
          name: 'Hoodie', 
          price: 799, 
          image: img3
        }
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (course) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === course.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === course.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: course, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (course) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== course.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
      
        <div className="App">
           
                                  <header className="App-header">
            <h1>ASN Shopping Cart</h1>
           
        </header>
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;
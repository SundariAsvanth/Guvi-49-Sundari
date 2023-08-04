function countDown(callback){
    setTimeout( () => {
        Element.innerText="";
        setTimeout( () => {
            document.getElementById("c1").innerText="10";
            setTimeout( () => {
                document.getElementById("c1").innerText="9";
                setTimeout( () => {
                    document.getElementById("c1").innerText="8";
                    setTimeout( () => {
                        document.getElementById("c1").innerText="7";
                        setTimeout( () => {
                            document.getElementById("c1").innerText="6";
                            setTimeout( () => {
                                document.getElementById("c1").innerText="5";
                                setTimeout( () => {
                                    document.getElementById("c1").innerText="4";
                                    setTimeout( () => {
                                        document.getElementById("c1").innerText="3";
                                        setTimeout( () => {
                                            document.getElementById("c1").innerText="2";
                                            setTimeout( () => {
                                                document.getElementById("c1").innerText="1";
                                                document.getElementById("c1").innerText="Happy Independence Day";
                                            },1000);
                                        },1100);
                                    },1200);
                                },1300);
                            },1400);
                        },1500);
                    },1600);
                },1700);
            },1800);
        },1900);
    },2000);
}
countDown();
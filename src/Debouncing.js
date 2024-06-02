



    // example1

    /* document.querySelector('#Grandparent')
      .addEventListener('click',() => {
      console.log('GrandParent clicked')
      })
      
      document.querySelector('#parent')
      .addEventListener('click',() => {
      console.log('Parent clicked')
      })
      
      document.querySelector('#child')
      .addEventListener('click',() => {
      console.log('Child clicked')
      }) */



    //example 2

    /*  document.querySelector('#Grandparent')
       .addEventListener('click',() => {
     console.log('GrandParent clicked')
     },true)
     
     document.querySelector('#parent')
       .addEventListener('click',() => {
     console.log('Parent clicked')
     },true)
     
     document.querySelector('#child')
       .addEventListener('click',() => {
     console.log('Child clicked')
     },true) */


    //example 3


    /*   document.querySelector('#Grandparent')
        .addEventListener('click',() => {
      console.log('GrandParent clicked')
      },true)
      
      document.querySelector('#parent')
        .addEventListener('click',() => {
      console.log('Parent clicked')
      },false)
      
      document.querySelector('#child')
        .addEventListener('click',() => {
      console.log('Child clicked')
      },true) */

    //example 4

    document.querySelector('#Grandparent')
        .addEventListener('click', () => {
            console.log('GrandParent clicked')
        }, true)

    document.querySelector('#parent')
        .addEventListener('click', () => {
            console.log('Parent clicked')
        }, false)

    document.querySelector('#child')
        .addEventListener('click', (e) => {
            console.log('Child clicked')
            e.stopPropagation();
        }, true)




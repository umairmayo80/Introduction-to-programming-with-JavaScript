function exampleConst() {
    const pi = 3.14159; // Declaring a const variable 'pi' with the value 3.14159
  
    if (true) {
      const x = 10; // 'x' is block-scoped within this 'if' block.
      console.log(x); // Outputs 10
      console.log(pi)
      if(true){
        console.log(x);
    //   pi = 3.14; // Error: Assignment to constant variable 'pi'.
      }

    }
  
    // console.log(x); // Error: 'x' is not defined, as it is outside the 'if' block.
    console.log(pi); // Outputs 3.14159, as 'pi' is still accessible in this scope.
  
    // const pi = 3.14; // Error: Identifier 'pi' has already been declared.
  }
  
  exampleConst();
  
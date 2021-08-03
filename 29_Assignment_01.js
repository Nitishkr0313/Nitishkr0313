1 => Given an array, write functions to find the minimum and maximum elements in it.
		var numbers = [7,3,5,6,8, 4]
		expected output : min: 3  max: 8
		hint: use .length for array elements count

    Ans>//for max
         <script>
             var numbers = [7,3,5,6,8, 4];
              var max=numbers[0];
                for(var i=1;i<numbers.length;i++)
                 {
                   if(numbers[i]>max)
                    {
                     max=numbers[i];
                    }
                  }
                 document.write("max element"+" "+max);
          </script>
          --------------
            //for min
           <script>
             var numbers = [7,3,5,6,8, 4];
              var min=numbers[0];
                for(var i=1;i<numbers.length;i++)
                 {
                   if(numbers[i]<min)
                    {
                     min=numbers[i];
                    }
                  }
             document.write("min element"+" "+min);
        
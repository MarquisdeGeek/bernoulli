with Text_IO; use Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

procedure bernoulli is
  Bern: Integer:= 4;
 
begin
   Put_Line("Which B(n) would you like to compute:");
   Get(Bern);

   declare
      N: array(1..Bern+1) of Integer; 
      D: array(1..Bern+1) of Integer; 
      new_denom: Integer;
      gcd_result: Integer;

      function GCD (X, Y: Integer) return Integer is

         X1: Integer:= X;
         Y1: Integer:= Y;
         Old_X :  Integer;
      
      begin
      
         while (Y1 /= 0) loop
            -- x, y := y, x mod y
            Old_X := X1;
            X1 := Y1;
            Y1 := Old_X mod Y1;
         end loop;
      
         return X1;
      
      end GCD;


   begin
      for m in 1..Bern+1 loop
         N(m) := 1;
         D(m) := m;

         for j in reverse 2..m loop
           new_denom := D(j-1) * D(j);
 
           N(j-1) := N(j-1) * D(j);
           N(j) := N(j) * D(j-1);

           D(j-1) := new_denom;
           D(j) := new_denom;

           -- subtract
           N(j-1) := N(j-1) - N(j);
           -- Apply the j* .. bit
           N(j-1) := N(j-1) * (j-1);


			  -- Reduce
           gcd_result := GCD(N(j-1), D(j-1));
           N(j-1) := N(j-1)/gcd_result;
           D(j-1) := D(j-1)/gcd_result;

        end loop;

      end loop;

      Put(Integer'Image(N(1)));
      Put("/");
      Put(Integer'Image(D(1)));
 
   end;
end bernoulli;


import random
n = random.randrange(1,10)
guess = int(input("Enter any number: "))
while n!= guess:
    if guess < n:
        print("Too Low")
        guess = int(input("Enter number again: "))
    elif guess > n:
        print("Too High")
        guess = int(input("Enter number agian: "))
    else:
        break
print("Guessed it right!!")        
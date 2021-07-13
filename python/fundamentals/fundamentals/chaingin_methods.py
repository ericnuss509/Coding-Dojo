class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
        

    def make_deposit(self, amount):
        self.account_balance += amount
        return self
        
        
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"{self.name}'s balance is {self.account_balance}")
        return self

    def transfer_money(self, friend, amount):
        self.make_withdrawal(amount)
        friend.make_deposit(amount)
        return self

eric = User("eric", "enuss@gmail.com")
eric.make_deposit(100).make_deposit(50).make_deposit(25).make_withdrawal(5).display_user_balance()


gary = User("gary","gary@email.com")
gary.make_deposit(50).make_deposit(50).make_withdrawal(15).make_withdrawal(30).display_user_balance()

christian = User("christian","christian@yahoo.com")
christian.make_deposit(600).make_withdrawal(30).make_withdrawal(15).make_withdrawal(15).display_user_balance()


gary.transfer_money(christian, 30).display_user_balance()

christian.display_user_balance()

package entity

import "gorm.io/gorm"
		


type Payment struct {
	gorm.Model 
	PaymentMethodName string //วิธีการชำระ
	Status            string //สถานะการชำระเงิน
	Amount            float64//จำนวนเงิน
	
	// 1 payment ต่อ 1 วิธ๊ชำระเงิน
	CreditCards []  CreditCard `gorm:"foreignKey:payment_id"`
	Paypals []      Paypal     `gorm:"foreignKey:payment_id"`
	PromptPays []   PromptPay  `gorm:"foreignKey:payment_id"`

    // SubscriptionID ทำหน้าที่เป็น FK
	SubscriptionID *uint
	Subscription   Subscription `gorm:"foriegnKey:subscription_id"`
	
}
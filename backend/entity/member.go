package entity

import "gorm.io/gorm"
		


type Member struct {
	gorm.Model 
	FirstName string
	LastName string
	Email string
	Username string
	Password  string 
	GenderID  uint 
	Status string //สถานะสมาชิก

	
    // 1 member สามารถมีการสมัครแพ็คเกจหลายครั่ง
	Subscriptions [] Subscription `gorm:"foreignKey:member_id "`
	
}
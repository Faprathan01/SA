package entity

import "gorm.io/gorm" 
		


type Package struct {
	gorm.Model
	PackageName string
	Description string
	Price float64
	Duration_days int //ระยะเวลาแต่ละแพ็ตเก็จ
	
	// 1 Package สามารถมีการสมัครแพ็คเกจหลายครั่ง
	Subscriptions [] Subscription `gorm:"foreignKey:package_id "`
}




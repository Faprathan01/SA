package entity

import (
	"gorm.io/gorm"
	"time"
)
//เก็บข้อมูลการสมัครแพ็คเกจ
type Subscription struct { 
    gorm.Model  
    Start_Date           time.Time //วันที่เริ่มสมัคร
	End_Date             time.Time //สิ้นสุด
	Total_amount         float64 //จำนวนเงินที่จ่าย
	Status               string
   

	
	// 1 Subscription สามารถมีหลายการชำระเงิน (กรณีการต่ออายุ)
	Payments [] Payment `gorm:"foreignKey:subscription_id"`

	// MemberID ทำหน้าที่เป็น FK
	MemberID *uint
	Member   Member `gorm:"foriegnKey:member_id"`
	// Package  ทำหน้าที่เป็น FK
	PackageID  *uint
	Package  Package `gorm:"foreignKey:package_id"`
	
} 
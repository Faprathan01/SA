package controller

import (
	"net/http"

	"PJ/backend/config"
	"PJ/backend/entity"
	"github.com/gin-gonic/gin"
)

// POST /subscriptions
func CreateSubscription(c *gin.Context) {
	var subscription entity.Subscription

	// Bind JSON data to Subscription entity
	if err := c.ShouldBindJSON(&subscription); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db := config.DB()

	// Validate associated MemberID
	var member entity.Member
	if err := db.First(&member, subscription.MemberID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Member not found"})
		return
	}

	// Validate associated PackageID
	var pkg entity.Package
	if err := db.First(&pkg, subscription.PackageID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Package not found"})
		return
	}

	// Create Subscription record
	if err := db.Create(&subscription).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Subscription created successfully", "data": subscription})
}

// GET /subscriptions/:id
func GetSubscription(c *gin.Context) {
	id := c.Param("id")
	var subscription entity.Subscription

	db := config.DB()

	// Fetch Subscription record by ID, preload related entities
	if err := db.Preload("Member").Preload("Package").Preload("Payments").First(&subscription, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Subscription not found"})
		return
	}

	c.JSON(http.StatusOK, subscription)
}

// GET /subscriptions
func ListSubscriptions(c *gin.Context) {
	var subscriptions []entity.Subscription

	db := config.DB()

	// Fetch all Subscription records, preload related entities
	if err := db.Preload("Member").Preload("Package").Preload("Payments").Find(&subscriptions).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, subscriptions)
}

// PATCH /subscriptions/:id
func UpdateSubscription(c *gin.Context) {
	id := c.Param("id")
	var subscription entity.Subscription

	db := config.DB()

	// Fetch Subscription record by ID
	if err := db.First(&subscription, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Subscription not found"})
		return
	}

	// Bind JSON data to existing record
	if err := c.ShouldBindJSON(&subscription); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Optionally validate associated MemberID
	var member entity.Member
	if err := db.First(&member, subscription.MemberID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Member not found"})
		return
	}

	// Optionally validate associated PackageID
	var pkg entity.Package
	if err := db.First(&pkg, subscription.PackageID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Package not found"})
		return
	}

	// Update the Subscription record
	if err := db.Save(&subscription).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Subscription updated successfully", "data": subscription})
}

// DELETE /subscriptions/:id
func DeleteSubscription(c *gin.Context) {
	id := c.Param("id")

	db := config.DB()

	// Delete the Subscription record
	if tx := db.Delete(&entity.Subscription{}, id); tx.RowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Subscription not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Subscription deleted successfully"})
}

package main

import (
	"net/http"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// HTML files
	r.LoadHTMLFiles("index.html")

	// Assets
	r.Use(static.Serve("/", static.LocalFile("./dist", false)))
	// r.Use(static.Serve("/tables", static.LocalFile("./dist", false)))

	// Main ページ
	r.GET("/", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	r.POST("/tables/create", func(c *gin.Context) {
		// DB から取ってきて、ID のページにリダイレクトする
		// 今はテーブルの名前が URI になってるので重複する可能性がある
		c.Redirect(http.StatusMovedPermanently, "/tables/aaa")
	})

	// Serve Each Table Page
	r.GET("/tables/:tableid", func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})
	r.Run()
}

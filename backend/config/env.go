package config

import (
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Env struct {
	AppEnv        string // app environment
	ServerAddress string // server address
	Port          string // server's port
	RedisUrl      string // Redis address
	RedisNet      string // Redis network
	RedisPwd      string // Redis password
	RedisDb       int    // Redis db
}

func NewEnv() *Env {
	// Load environment variables from .env file
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Environment can't be loaded: ", err)
	}

	redisDb, _ := strconv.ParseInt(os.Getenv("REDIS_DB"), 10, 64)

	return &Env{
		AppEnv:        os.Getenv("APP_ENV"),
		ServerAddress: os.Getenv("SERVER_ADDRESS"),
		Port:          os.Getenv("PORT"),
		RedisUrl:      os.Getenv("REDIS_URL"),
		RedisNet:      os.Getenv("REDIS_NETWORK"),
		RedisPwd:      os.Getenv("REDIS_PASSWORD"),
		RedisDb:       int(redisDb),
	}
}

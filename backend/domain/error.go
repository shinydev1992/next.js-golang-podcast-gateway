package domain

type Error struct {
	Message string `json:"message"` // error message
}

func NewError(message string) *Error {
	return &Error{
		Message: message,
	}
}

var (
	ErrInvalidParameters   = NewError("Invalid parameters")    // Error in invalid parameters
	ErrInternalServerError = NewError("Internal server error") // Internal server error
	ErrTooManyRequests     = NewError("Too many requests")     // Error in too many requests to the server
)

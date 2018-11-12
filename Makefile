SRC_DIR = src
OBJ_DIR = .obj
OUTPUT_NAME = fibonacci

CFLAGS = -O3

LDFLAGS =
LDLIBS =

# All the source files ending in '.c' in $(SRC_DIR) directory
SRCS := $(wildcard $(SRC_DIR)/*.c)

# Get the corresponding object file of each source file
OBJS := $(patsubst $(SRC_DIR)/%.c,$(OBJ_DIR)/%.o,$(SRCS))

# Get the dependency file of each source file
DEPS := $(patsubst $(SRC_DIR)/%.c,$(OBJ_DIR)/%.d,$(SRCS))

all : $(OBJ_DIR)/$(OUTPUT_NAME) ;

$(OBJ_DIR)/$(OUTPUT_NAME) : $(OBJS)
	$(CC) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)
	@echo
	@echo $(OUTPUT_NAME) build success!
	@echo

$(OBJ_DIR)/%.o : $(SRC_DIR)/%.c | $(OBJ_DIR)
	$(CC) -c $(CFLAGS) -o $@ $<

-include $(deps)

$(OBJ_DIR) :
	@echo Creating OBJ_DIR ...
	@mkdir $(OBJ_DIR)
	@echo OBJ_DIR created!

clean :
	@echo "cleaning..."
	-rm -rf $(OBJ_DIR)
	@echo "clean done!"

.PHONY: all clean test

package in.mohamedfayaas.billingsoftware.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import in.mohamedfayaas.billingsoftware.io.UserRequest;
import in.mohamedfayaas.billingsoftware.io.UserResponse;
import in.mohamedfayaas.billingsoftware.service.UserService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class UserController {
    private final UserService  userService;

    @PostMapping("/register")
    public UserResponse registerUser(@RequestBody UserRequest request) {
        try{
            return userService.createUser(request);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Unable to create user" + e.getMessage());
        }
    }

    @GetMapping("/users")
    public List<UserResponse>  readUsers() {
        return userService.readUser();
    }
    
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable String id) {
        try{
            userService.deleteUser(id);
        }catch(Exception  e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found");
        }
    }
    
}

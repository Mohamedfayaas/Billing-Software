package in.mohamedfayaas.billingsoftware.service;

import java.util.List;

import in.mohamedfayaas.billingsoftware.io.UserRequest;
import in.mohamedfayaas.billingsoftware.io.UserResponse;

public interface UserService {
    UserResponse createUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUser();

    void deleteUser(String id);
}

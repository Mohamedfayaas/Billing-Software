package in.mohamedfayaas.billingsoftware.service.impl;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import in.mohamedfayaas.billingsoftware.io.UserRequest;
import in.mohamedfayaas.billingsoftware.io.UserResponse;
import in.mohamedfayaas.billingsoftware.repository.UserRepository;
import in.mohamedfayaas.billingsoftware.service.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse createUser(UserRequest request) {
        UserEntity newUser = convertToEntity(request);
        newUser = userRepository.save(newUser);
        return covertToResponse(newUser);
    }

    private UserEntity convertToEntity(UserRequest request) {
        return UserEntity.builder()
            .userId(UUID.randomUUID().toString())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(request.getRole().toUpperCase())
            .name(request.getName())
            .build();
    }

    private UserResponse covertToResponse(UserEntity newUser) {
         return UserResponse.builder()
            .userId(newUser.getUserId())
            .email(newUser.getEmail())
            .createdAt(newUser.getCreatedAt())
            .updatedAt(newUser.getUpdatedAt())
            .role(newUser.getRole())
            .name(newUser.getName())
            .build();
    }

    @Override
    public void deleteUser(String id) {
        UserEntity existingUser = userRepository.findByUserId(id)
            .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));
        userRepository.delete(existingUser);
    }

    @Override
    public String getUserRole(String email) {
        UserEntity existingUser = userRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("User not found for the email: "+ email));

        return existingUser.getRole();
    }

    @Override
    public List<UserResponse> readUser() {
        return userRepository.findAll()
            .stream()
            .map(user -> convertToResponse(user))
            .collect(Collectors.toList());
    }

}

package in.mohamedfayaas.billingsoftware.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import in.mohamedfayaas.billingsoftware.entity.UserEntity;

public interface UserRepository  extends JpaRepository<UserEntity, Long>{
    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByUserId(String userId);
    in.mohamedfayaas.billingsoftware.service.impl.UserEntity save(
            in.mohamedfayaas.billingsoftware.service.impl.UserEntity newUser);
}

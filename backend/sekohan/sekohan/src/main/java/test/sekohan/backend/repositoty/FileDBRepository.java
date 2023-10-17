package test.sekohan.backend.repositoty;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.sekohan.backend.model.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}
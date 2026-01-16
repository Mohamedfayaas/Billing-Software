package in.mohamedfayaas.billingsoftware.io;

import java.sql.Timestamp;

import lombok.Builder;
import lombok.Data;
@Builder
@Data
public class CategoryResponse {
    private String categoryId;
    private String name;
    private String description;
    private String bgColor;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String imgUrl;
}

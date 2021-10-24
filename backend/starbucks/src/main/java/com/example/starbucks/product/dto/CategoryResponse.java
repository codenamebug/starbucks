package com.example.starbucks.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class CategoryResponse {

    private String type;
    private List<SubCategoryResponse> subCategories;
}

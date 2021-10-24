package com.example.starbucks.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class SubCategoryResponse {

    private String type;
    private List<ProductResponse> products;
}

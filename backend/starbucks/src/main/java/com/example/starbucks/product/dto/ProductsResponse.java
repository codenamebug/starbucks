package com.example.starbucks.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class ProductsResponse {

    private List<ProductResponse> products;
}

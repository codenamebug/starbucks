package com.example.starbucks.product.controller;

import com.example.starbucks.product.service.ProductService;
import com.example.starbucks.product.dto.ProductsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping(params = "category")
    public ProductsResponse showProducts(@RequestParam String category) {
        return productService.showProducts(category);
    }
}

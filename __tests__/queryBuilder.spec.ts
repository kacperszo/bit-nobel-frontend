import {buildQueryString, QueryParameter} from "@/utils/queryBuilder";

describe('buildQueryString', () => {
    test('should build a query string with one parameter', () => {
        const endpoint = 'https://example.com/api';
        const parameters: QueryParameter[] = [{name: 'param1', value: 'value1'}];

        const result = buildQueryString(endpoint, parameters);

        expect(result).toBe('https://example.com/api?param1=value1');
    });

    test('should build a query string with multiple parameters', () => {
        const endpoint = 'https://example.com/api';
        const parameters: QueryParameter[] = [
            {name: 'param1', value: 'value1'},
            {name: 'param2', value: 'value2'},
        ];

        const result = buildQueryString(endpoint, parameters);

        expect(result).toBe('https://example.com/api?param1=value1&param2=value2');
    });

    test('should handle special characters in parameter values', () => {
        const endpoint = 'https://example.com/api';
        const parameters: QueryParameter[] = [
            {name: 'param1', value: 'special@character'},
            {name: 'param2', value: 'another&value'},
        ];

        const result = buildQueryString(endpoint, parameters);

        expect(result).toBe('https://example.com/api?param1=special%40character&param2=another%26value');
    });

});
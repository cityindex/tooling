﻿var schema =
{
    properties: {
        "ApiStopLimitOrderHistoryDTO": {
            "id": "ApiStopLimitOrderHistoryDTO",
            "type": "object",
            "description": "A stop or limit order from a historical perspective.",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "The order's unique identifier."
                },
                "MarketId": {
                    "type": "integer",
                    "description": "The markets unique identifier."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The market's name."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction, buy or sell."
                },
                "OriginalQuantity": {
                    "type": "number",
                    "description": "The quantity of the order when it became a trade / was cancelled etc."
                },
                "Price": {
                    "type": "string",
                    "description": "The price / rate that the order was filled at."
                },
                "TriggerPrice": {
                    "type": "number",
                    "description": "The price / rate that the the order was set to trigger at."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "description": "The trading account that the order is on."
                },
                "TypeId": {
                    "type": "integer",
                    "description": "The type of the order stop, limit or trade."
                },
                "OrderApplicabilityId": {
                    "type": "integer",
                    "description": "When the order applies until. i.e. good till cancelled (GTC) good for day (GFD) or good till time (GTT)."
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "StatusId": {
                    "type": "integer",
                    "description": "the order status."
                },
                "LastChangedDateTimeUtc": {
                    "type": "string",
                    "description": "The last time that the order changed. Note - Does not include things such as the current market price.",
                    "format": "wcf-date"
                }
            }
        },
        "ApiIfDoneDTO": {
            "id": "ApiIfDoneDTO",
            "type": "object",
            "description": "An IfDone order represents an order which is placed when the corresponding order is filled, e.g attaching a stop/limit to a trade or order",
            "properties": {
                "Stop": {
                    "$ref": "#.ApiStopLimitOrderDTO",
                    "description": "The price at which the stop order will be filled"
                },
                "Limit": {
                    "$ref": "#.ApiStopLimitOrderDTO",
                    "description": "The price at which the limit order will be filled"
                }
            }
        },
        "ApiTradingAccountDTO": {
            "id": "ApiTradingAccountDTO",
            "type": "object",
            "description": "Information about a TradingAccount",
            "properties": {
                "TradingAccountId": {
                    "type": "integer",
                    "description": "Trading Account Id"
                },
                "TradingAccountCode": {
                    "type": "string",
                    "description": "Trading Account Code"
                },
                "TradingAccountStatus": {
                    "type": "string",
                    "description": "Trading Account Status"
                },
                "TradingAccountType": {
                    "type": "string",
                    "description": "Trading Account Type"
                }
            }
        },
        "PriceBarDTO": {
            "id": "PriceBarDTO",
            "type": "object",
            "description": "The details of a specific price bar, useful for plotting candlestick charts",
            "properties": {
                "BarDate": {
                    "type": "string",
                    "description": "The date of the start of the price bar interval",
                    "demoValue": "/Date(1287136540715)/",
                    "format": "wcf-date"
                },
                "Open": {
                    "type": "number",
                    "description": "For the equities model of charting, this is the price at the start of the price bar interval.",
                    "demoValue": 1.5
                },
                "High": {
                    "type": "number",
                    "description": "The highest price occurring during the interval of the price bar",
                    "demoValue": 2.343
                },
                "Low": {
                    "type": "number",
                    "description": "The lowest price occurring during the interval of the price bar",
                    "demoValue": 1.3423
                },
                "Close": {
                    "type": "number",
                    "description": "The price at the end of the price bar interval",
                    "demoValue": 2.42
                }
            }
        },
        "PriceDTO": {
            "id": "PriceDTO",
            "type": "object",
            "description": "A Price for a specific Market.",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "description": "The Market that the Price is related to.",
                    "demoValue": 1000,
                    "minimum": 1,
                    "maximum": 9999999
                },
                "TickDate": {
                    "type": "string",
                    "description": "The date of the Price. Always expressed in UTC.",
                    "demoValue": "/Date(1289231327280)/",
                    "format": "wcf-date"
                },
                "Bid": {
                    "type": "number",
                    "description": "The current Bid price (price at which the customer can sell).",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "Offer": {
                    "type": "number",
                    "description": "The current Offer price (price at which the customer can buy, some times referred to as Ask price).",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "Price": {
                    "type": "number",
                    "description": "The current mid price.",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "High": {
                    "type": "number",
                    "description": "The highest price reached for the day.",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "Low": {
                    "type": "number",
                    "description": "The lowest price reached for the day",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "Change": {
                    "type": "number",
                    "description": "The change since the last price (always positive. See Direction for direction)",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "Direction": {
                    "type": "integer",
                    "description": "The direction of movement since the last price. 1 == up, 0 == down",
                    "demoValue": 1,
                    "minimum": 0,
                    "maximum": 1
                },
                "AuditId": {
                    "type": "string",
                    "description": "A unique id for this price. Treat as a unique, but random string",
                    "demoValue": "o892nkl8hopin"
                }
            }
        },
        "ApiTradeHistoryDTO": {
            "id": "ApiTradeHistoryDTO",
            "type": "object",
            "description": "A Trade from a historical perspective.",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "The order id."
                },
                "MarketId": {
                    "type": "integer",
                    "description": "The market id."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The name of the market."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction of the trade."
                },
                "OriginalQuantity": {
                    "type": "number",
                    "description": "The original quantity of the trade, before part closures."
                },
                "Price": {
                    "type": "number",
                    "description": "The open price of the trade."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "description": "The trading account that the order is on."
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "LastChangedDateTimeUtc": {
                    "type": "string",
                    "description": "The last time that the order changed. Note - Does not include things such as the current market price.",
                    "format": "wcf-date"
                }
            }
        },
        "ApiBasicStopLimitOrderDTO": {
            "id": "ApiBasicStopLimitOrderDTO",
            "type": "object",
            "description": "A stop or limit order with a limited number of data fields.",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "The order's unique identifier."
                },
                "TriggerPrice": {
                    "type": "number",
                    "description": "The order's trigger price."
                },
                "Quantity": {
                    "type": "number",
                    "description": "The quantity of the product."
                }
            }
        },
        "NewsDTO": {
            "id": "NewsDTO",
            "type": "object",
            "description": "A news headline",
            "properties": {
                "StoryId": {
                    "type": "integer",
                    "description": "The unique identifier for a news story",
                    "demoValue": 12654,
                    "minimum": 1,
                    "maximum": 2147483647
                },
                "Headline": {
                    "type": "string",
                    "description": "The News story headline",
                    "demoValue": "Barron's(8/29) Speaking Of Dividends: The Big Cheese: Kraft Foods Slices Costs And Serves A Payout Hike"
                },
                "PublishDate": {
                    "type": "string",
                    "description": "The date on which the news story was published. Always in UTC",
                    "demoValue": "/Date(1289231327280)/",
                    "format": "wcf-date"
                }
            }
        },
        "ApiClientAccountWatchlistItemDTO": {
            "id": "ApiClientAccountWatchlistItemDTO",
            "type": "object",
            "description": "Api watchlist item",
            "properties": {
                "WatchlistId": {
                    "type": "integer",
                    "description": "Parent watchlist id"
                },
                "MarketId": {
                    "type": "integer",
                    "description": "Watchlist item market id"
                },
                "DisplayOrder": {
                    "type": "integer",
                    "description": "Watchlist item display order"
                }
            }
        },
        "ApiLookupDTO": {
            "id": "ApiLookupDTO",
            "type": "object",
            "description": "Generic look up data.",
            "properties": {
                "Id": {
                    "type": "integer",
                    "description": "lookups id."
                },
                "Description": {
                    "type": "string",
                    "description": "lookup items description."
                },
                "DisplayOrder": {
                    "type": "integer",
                    "description": "order the items should be displayed on a user interface."
                },
                "TranslationTextId": {
                    "type": "string",
                    "description": "translation text id."
                },
                "TranslationText": {
                    "type": "string",
                    "description": "translated text."
                },
                "IsActive": {
                    "type": "boolean",
                    "description": "is active."
                },
                "IsAllowed": {
                    "type": "boolean",
                    "description": "is allowed."
                }
            }
        },
        "ApiOpenPositionDTO": {
            "id": "ApiOpenPositionDTO",
            "type": "object",
            "description": "A Trade, or order that is currently open.",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "The order's unique identifier."
                },
                "MarketId": {
                    "type": "integer",
                    "description": "The markets unique identifier."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The market's name."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction, buy or sell."
                },
                "Quantity": {
                    "type": "number",
                    "description": "The quantity of the order."
                },
                "Price": {
                    "type": "number",
                    "description": "The price / rate that the trade was opened at."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "description": "The trading account that the order is on."
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "Status": {
                    "type": "integer",
                    "description": "The order status."
                },
                "StopOrder": {
                    "$ref": "#.ApiBasicStopLimitOrderDTO",
                    "description": "The stop order attached to this order."
                },
                "LimitOrder": {
                    "$ref": "#.ApiBasicStopLimitOrderDTO",
                    "description": "The limit order attached to this order."
                },
                "LastChangedDateTimeUTC": {
                    "type": "string",
                    "description": "The last time that the order changed. Note - Does not include things such as the current market price.",
                    "format": "wcf-date"
                }
            }
        },
        "ApiMarketEodDTO": {
            "id": "ApiMarketEodDTO",
            "type": "object",
            "description": "market end of day information.",
            "properties": {
                "MarketEodUnit": {
                    "type": "string",
                    "description": "Unit"
                },
                "MarketEodAmount": {
                    "type": "string",
                    "description": "End of day amount."
                }
            }
        },
        "ApiMarketInformationDTO": {
            "id": "ApiMarketInformationDTO",
            "type": "object",
            "description": "Contains market information.",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "description": "market id."
                },
                "Name": {
                    "type": "string",
                    "description": "The market name"
                },
                "MarginFactor": {
                    "type": "string",
                    "description": "Margin factor, expressed as points or a percentage."
                },
                "MinDistance": {
                    "type": "string",
                    "description": "The minimum distance from the current price you can place an order."
                },
                "WebMinSize": {
                    "type": "string",
                    "description": "The minimum quantity that can be traded over the web."
                },
                "MaxSize": {
                    "type": "string",
                    "description": "The max size of an order."
                },
                "Market24H": {
                    "type": "boolean",
                    "description": "Is the market a 24 hour market."
                },
                "PriceDecimalPlaces": {
                    "type": "string",
                    "description": "the number of decimal places in the market's price."
                },
                "DefaultQuoteLength": {
                    "type": "string",
                    "description": "default quote length."
                },
                "TradeOnWeb": {
                    "type": "boolean",
                    "description": "Can you trade this market on the web."
                },
                "LimitUp": {
                    "type": "boolean",
                    "description": "New sell orders will be rejected. Orders resulting in a short open position will be red carded."
                },
                "LimitDown": {
                    "type": "boolean",
                    "description": "New buy orders will be rejected. Orders resulting in a long open position will be red carded."
                },
                "LongPositionOnly": {
                    "type": "boolean",
                    "description": "Cannot open a short position. Equivalent to limit up."
                },
                "CloseOnly": {
                    "type": "boolean",
                    "description": "Can only close open positions. Equivalent to both Limit up and Limit down."
                },
                "MarketEod": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiMarketEodDTO"
                    },
                    "description": "list of market end of day dtos."
                }
            }
        },
        "ApiOrderDTO": {
            "id": "ApiOrderDTO",
            "type": "object",
            "description": "Represents an order",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "The order identifier"
                },
                "MarketId": {
                    "type": "integer",
                    "description": "A market's unique identifier"
                },
                "Direction": {
                    "type": "string",
                    "description": "Direction identifier for trade, values supported are buy or sell"
                },
                "Quantity": {
                    "type": "number",
                    "description": "Size of the order"
                },
                "Price": {
                    "type": "string",
                    "description": "The price at which the order is to be filled"
                },
                "TradingAccountId": {
                    "type": "number",
                    "description": "TradingAccount associated with the order"
                },
                "CurrencyId": {
                    "type": "integer",
                    "description": "Currency id for order (as represented in the trading system)"
                },
                "StatusId": {
                    "type": "integer",
                    "description": "Status id of order (as represented in the trading system)"
                },
                "TypeId": {
                    "type": "integer",
                    "description": "The type of the order, Trade, stop or limit."
                },
                "IfDone": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiIfDoneDTO"
                    },
                    "description": "List of IfDone Orders which will be filled when the initial order is triggered"
                },
                "OcoOrder": {
                    "$ref": "#.ApiStopLimitOrderDTO",
                    "description": "Corresponding OcoOrder (One Cancels the Other)"
                }
            }
        },
        "ApiActiveStopLimitOrderDTO": {
            "id": "ApiActiveStopLimitOrderDTO",
            "type": "object",
            "description": "A stop or limit order that is currently active.",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "The order's unique identifier."
                },
                "ParentOrderId": {
                    "type": "string",
                    "description": "The order's parent OrderId."
                },
                "MarketId": {
                    "type": "integer",
                    "description": "The markets unique identifier."
                },
                "MarketName": {
                    "type": "string",
                    "description": "The market's name."
                },
                "Direction": {
                    "type": "string",
                    "description": "The direction, buy or sell."
                },
                "Quantity": {
                    "type": "number",
                    "description": "The quantity of the product."
                },
                "TriggerPrice": {
                    "type": "number",
                    "description": "The marked to market price at which the order will trigger at."
                },
                "TradingAccountId": {
                    "type": "number",
                    "description": "The trading account that the order is on."
                },
                "Type": {
                    "type": "integer",
                    "description": "The type of order, i.e. stop or limit."
                },
                "Applicability": {
                    "type": "integer",
                    "description": "When the order applies until. i.e. good till cancelled (GTC) good for day (GFD) or good till time (GTT)."
                },
                "ExpiryDateTimeUTC": {
                    "type": "string",
                    "description": "The associated expiry DateTime.",
                    "demoValue": "\\/Date(1290164280000)\\/",
                    "format": "wcf-date"
                },
                "Currency": {
                    "type": "string",
                    "description": "The trade currency."
                },
                "Status": {
                    "type": "integer",
                    "description": "The order status."
                },
                "StopOrder": {
                    "$ref": "#.ApiBasicStopLimitOrderDTO",
                    "description": "The if done stop order."
                },
                "LimitOrder": {
                    "$ref": "#.ApiBasicStopLimitOrderDTO",
                    "description": "The if done limit order"
                },
                "OcoOrder": {
                    "$ref": "#.ApiBasicStopLimitOrderDTO",
                    "description": "The order on the other side of a one Cancels the other relationship."
                },
                "LastChangedDateTimeUTC": {
                    "type": "string",
                    "description": "The last time that the order changed. Note - Does not include things such as the current market price.",
                    "format": "wcf-date"
                }
            }
        },
        "ApiMarketDTO": {
            "id": "ApiMarketDTO",
            "type": "object",
            "description": "basic information about a Market",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "description": "A market's unique identifier",
                    "demoValue": 254527845,
                    "minimum": 1000000,
                    "maximum": 9999999
                },
                "Name": {
                    "type": "string",
                    "description": "The market name",
                    "demoValue": "Vodaphone CFD",
                    "minLength": 1,
                    "maxLength": 120
                }
            }
        },
        "QuoteDTO": {
            "id": "QuoteDTO",
            "type": "object",
            "description": "A quote for a specific order request",
            "properties": {
                "QuoteId": {
                    "type": "integer",
                    "description": "The uniqueId of the Quote",
                    "demoValue": 54198759874
                },
                "OrderId": {
                    "type": "integer",
                    "description": "The Order the Quote is related to",
                    "demoValue": 8458418478
                },
                "MarketId": {
                    "type": "integer",
                    "description": "The Market the Quote is related to",
                    "demoValue": 425748
                },
                "BidPrice": {
                    "type": "number",
                    "description": "The Price of the original Order request for a Buy",
                    "demoValue": 1.12345,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "BidAdjust": {
                    "type": "number",
                    "description": "The amount the bid price will be adjusted to become an order when the customer is buying (BidPrice + BidAdjust = BuyPrice)",
                    "demoValue": 1.12345,
                    "minimum": -999999999.0,
                    "maximum": 999999999.0
                },
                "OfferPrice": {
                    "type": "number",
                    "description": "The Price of the original Order request for a Sell",
                    "demoValue": 1.12345,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "OfferAdjust": {
                    "type": "number",
                    "description": "The amount the offer price will be adjusted to become an order when the customer is selling (OfferPrice + OfferAdjust = OfferPrice)",
                    "demoValue": 1.12345,
                    "minimum": -999999999.0,
                    "maximum": 999999999.0
                },
                "Quantity": {
                    "type": "number",
                    "description": "The Quantity is the number of units for the trade i.e CFD Quantity = Number of CFD's to Buy or Sell , FX Quantity = amount in base currency.",
                    "demoValue": 1.1
                },
                "CurrencyId": {
                    "type": "integer",
                    "description": "The system internal Id for the ISO Currency the equivalent ISO Code can be found using the API Call TODO Fill when the API call is available",
                    "demoValue": 1
                },
                "StatusId": {
                    "type": "integer",
                    "description": "The Status id of the Quote. The list of different Status values can be found using the API call TODO Fill when call avaliable",
                    "demoValue": 1
                },
                "TypeId": {
                    "type": "integer",
                    "description": "The quote type id.",
                    "demoValue": 1
                },
                "RequestDateTime": {
                    "type": "string",
                    "description": "The timestamp the quote was requested. Always expressed in UTC",
                    "demoValue": "/Date(1289231327280)/",
                    "format": "wcf-date"
                }
            }
        },
        "ApiStopLimitOrderDTO": {
            "id": "ApiStopLimitOrderDTO",
            "type": "object",
            "description": "Represents a stop/limit order",
            "extends": "ApiOrderDTO",
            "properties": {
                "ExpiryDateTimeUTC": {
                    "type": "string",
                    "description": "The associated expiry DateTime for a pair of GoodTillDate IfDone orders",
                    "demoValue": "\\/Date(1290164280000)\\/",
                    "format": "wcf-date"
                },
                "Applicability": {
                    "type": "string",
                    "description": "Identifier which relates to the expiry of the order/trade, i.e. GoodTillDate (GTD), GoodTillCancelled (GTC) or GoodForDay (GFD)",
                    "demoValue": "GTC",
                    "format": "wcf-date"
                }
            }
        },
        "OrderDTO": {
            "id": "OrderDTO",
            "type": "object",
            "description": "An order for a specific Trading Account",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "Order id",
                    "demoValue": 100
                },
                "MarketId": {
                    "type": "integer",
                    "description": "Market id.",
                    "demoValue": 100
                },
                "ClientAccountId": {
                    "type": "integer",
                    "description": "Client account id.",
                    "demoValue": 100
                },
                "TradingAccountId": {
                    "type": "integer",
                    "description": "Trading account id.",
                    "demoValue": 100
                },
                "CurrencyId": {
                    "type": "integer",
                    "description": "Trade currency id.",
                    "demoValue": 100,
                    "minimum": 0,
                    "maximum": 999999999
                },
                "CurrencyISO": {
                    "type": "string",
                    "description": "Trade currency ISO code.",
                    "demoValue": "GBP"
                },
                "Direction": {
                    "type": "integer",
                    "description": "direction of the order.",
                    "demoValue": 1
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Does the order automatically roll over.",
                    "demoValue": true
                },
                "ExecutionPrice": {
                    "type": "number",
                    "description": "the price the order was executed at.",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "LastChangedTime": {
                    "type": "string",
                    "description": "The date time that the order was last changed. Always expressed in UTC.",
                    "demoValue": "/Date(1289231327280)/",
                    "format": "wcf-date"
                },
                "OpenPrice": {
                    "type": "number",
                    "description": "the open price of the order.",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "OriginalLastChangedDateTime": {
                    "type": "string",
                    "description": "The date of the Order. Always expressed in UTC",
                    "demoValue": "/Date(1289231327280)/",
                    "format": "wcf-date"
                },
                "OriginalQuantity": {
                    "type": "number",
                    "description": "The orders original quantity, before any part / full closures.",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "PositionMethodId": {
                    "type": "integer",
                    "description": "The position method of the order."
                },
                "Quantity": {
                    "type": "number",
                    "description": "The current quantity of the order.",
                    "demoValue": 96.1575,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "Type": {
                    "type": "string",
                    "description": "the type of the order (1 = Trade / 2 = Stop / 3 = Limit)",
                    "demoValue": "1"
                },
                "Status": {
                    "type": "string",
                    "description": "The order status id.",
                    "demoValue": "1"
                },
                "ReasonId": {
                    "type": "integer",
                    "description": "the order status reason is.",
                    "demoValue": 1
                }
            }
        },
        "PriceTickDTO": {
            "id": "PriceTickDTO",
            "type": "object",
            "description": "The mid price at a particular point in time.",
            "properties": {
                "TickDate": {
                    "type": "string",
                    "description": "The datetime at which a price tick occurred. Accurate to the millisecond",
                    "demoValue": "/Date(1287136540715)/",
                    "format": "wcf-date"
                },
                "Price": {
                    "type": "number",
                    "description": "The mid price",
                    "demoValue": 1.5457,
                    "minimum": 0.0
                }
            }
        },
        "ApiClientAccountWatchlistDTO": {
            "id": "ApiClientAccountWatchlistDTO",
            "type": "object",
            "description": "Client account watchlist",
            "properties": {
                "WatchlistId": {
                    "type": "integer",
                    "description": "Watchlist item id"
                },
                "WatchlistDescription": {
                    "type": "string",
                    "description": "Watchlist description"
                },
                "DisplayOrder": {
                    "type": "integer",
                    "description": "Watchlist display order"
                },
                "Items": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiClientAccountWatchlistItemDTO"
                    },
                    "description": "Watchlist items"
                }
            }
        },
        "ClientAccountMarginDTO": {
            "id": "ClientAccountMarginDTO",
            "type": "object",
            "description": "The current margin for a specific client account",
            "properties": {
                "Cash": {
                    "type": "number",
                    "description": "cash balance expressed in the clients base currency.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "Margin": {
                    "type": "number",
                    "description": "The client account's total margin requirement expressed in base currency.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "MarginIndicator": {
                    "type": "number",
                    "description": "Margin indicator expressed as a percentage.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "NetEquity": {
                    "type": "number",
                    "description": "Net equity expressed in the clients base currency.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "OpenTradeEquity": {
                    "type": "number",
                    "description": "open trade equity (open / unrealised PNL) expressed in the client's base currency.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "TradeableFunds": {
                    "type": "number",
                    "description": "tradable funds expressed in the client's base currency.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "PendingFunds": {
                    "type": "number",
                    "description": "N/A",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "TradingResource": {
                    "type": "number",
                    "description": "trading resource expressed in the client's base currency.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "TotalMarginRequirement": {
                    "type": "number",
                    "description": "total margin requirement expressed in the client's base currency.",
                    "demoValue": 100.0,
                    "minimum": 0.0,
                    "maximum": 999999999.0
                },
                "CurrencyId": {
                    "type": "integer",
                    "description": "The clients base currency id.",
                    "demoValue": 100
                },
                "CurrencyISO": {
                    "type": "string",
                    "description": "The clients base currency iso code.",
                    "demoValue": "GBP"
                }
            }
        },
        "NewsDetailDTO": {
            "id": "NewsDetailDTO",
            "type": "object",
            "description": "Contains details of a specific news story",
            "extends": "NewsDTO",
            "properties": {
                "Story": {
                    "type": "string",
                    "description": "The detail of the story. This can contain HTML characters.",
                    "demoValue": "<pre>    (Expect lots of HTML here)     By Shirley A. Lazo </pre><p>    (END) Dow Jones Newswires</p><p>   August 27, 2005 00:01 ET (04:01 GMT)</p>",
                    "minLength": 0,
                    "maxLength": 2147483647
                }
            }
        },
        "ApiTradeOrderDTO": {
            "id": "ApiTradeOrderDTO",
            "type": "object",
            "description": "Represents a trade order",
            "extends": "ApiOrderDTO",
            "properties": {}
        },
        "ApiOrderResponseDTO": {
            "id": "ApiOrderResponseDTO",
            "type": "object",
            "description": "order response",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "order id."
                },
                "StatusReason": {
                    "type": "integer",
                    "description": "order status reason id."
                },
                "Status": {
                    "type": "integer",
                    "description": "order status id."
                },
                "Price": {
                    "type": "number",
                    "description": "price."
                },
                "CommissionCharge": {
                    "type": "number",
                    "description": "commission charge."
                },
                "IfDone": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiIfDoneResponseDTO"
                    },
                    "description": "list of if done orders."
                },
                "GuaranteedPremium": {
                    "type": "number",
                    "description": "premium for guaranteed orders."
                },
                "OCO": {
                    "$ref": "#.ApiOrderResponseDTO",
                    "description": "an order in an OCO relationship with this order."
                }
            }
        },
        "ApiStopLimitResponseDTO": {
            "id": "ApiStopLimitResponseDTO",
            "type": "object",
            "description": "The response from the stop limit order request",
            "extends": "ApiOrderResponseDTO",
            "properties": {}
        },
        "ListNewsHeadlinesResponseDTO": {
            "id": "ListNewsHeadlinesResponseDTO",
            "type": "object",
            "description": "The response from a GET request for News headlines",
            "properties": {
                "Headlines": {
                    "type": "array",
                    "items": {
                        "$ref": "#.NewsDTO"
                    },
                    "description": "A list of News headlines"
                }
            }
        },
        "ApiLogOnRequestDTO": {
            "id": "ApiLogOnRequestDTO",
            "type": "object",
            "description": "request to create a session (log on).",
            "properties": {
                "UserName": {
                    "type": "string",
                    "description": "Username is case sensitive",
                    "demoValue": "CC735158",
                    "minLength": 6,
                    "maxLength": 20
                },
                "Password": {
                    "type": "string",
                    "description": "Password is case sensitive",
                    "demoValue": "password",
                    "minLength": 6,
                    "maxLength": 20
                }
            }
        },
        "GetOrderResponseDTO": {
            "id": "GetOrderResponseDTO",
            "type": "object",
            "description": "Response containing the order. Only one of the two fields will be populated; this depends upon the type of order (Trade or Stop / Limit).",
            "properties": {
                "TradeOrder": {
                    "$ref": "#.ApiTradeOrderDTO",
                    "description": "The details of the order if it's a trade / open position."
                },
                "StopLimitOrder": {
                    "$ref": "#.ApiStopLimitOrderDTO",
                    "description": "The details of the order if it's a stop limit order."
                }
            }
        },
        "GetActiveStopLimitOrderResponseDTO": {
            "id": "GetActiveStopLimitOrderResponseDTO",
            "type": "object",
            "description": "Response containing the active stop limit order.",
            "properties": {
                "ActiveStopLimitOrder": {
                    "$ref": "#.ApiActiveStopLimitOrderDTO",
                    "description": "The active stop limit order. If it is null then the active stop limit order does not exist."
                }
            }
        },
        "UpdateWatchlistDisplayOrderRequestDTO": {
            "id": "UpdateWatchlistDisplayOrderRequestDTO",
            "type": "object",
            "description": "Get market information for a list of markets.",
            "properties": {
                "NewDisplayOrderIdSequence": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "Represents the new client watchlist displayOrderId list sequence"
                }
            }
        },
        "CancelOrderRequestDTO": {
            "id": "CancelOrderRequestDTO",
            "type": "object",
            "description": "A cancel order request.",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "The order identifier."
                },
                "TradingAccountId": {
                    "type": "integer",
                    "description": "TradingAccount associated with the cancel order request."
                }
            }
        },
        "InsertWatchlistItemRequestDTO": {
            "id": "InsertWatchlistItemRequestDTO",
            "type": "object",
            "description": "Update watchlist with item",
            "properties": {
                "WatchlistDisplayOrderId": {
                    "type": "integer",
                    "description": "The watchlist display order id to add the item"
                },
                "MarketId": {
                    "type": "integer",
                    "description": "The market item to add"
                }
            }
        },
        "GetPriceTickResponseDTO": {
            "id": "GetPriceTickResponseDTO",
            "type": "object",
            "description": "The response from a request for Price Ticks",
            "properties": {
                "PriceTicks": {
                    "type": "array",
                    "items": {
                        "$ref": "#.PriceTickDTO"
                    },
                    "description": "An array of price ticks, sorted in ascending order by PriceTick.TickDate"
                }
            }
        },
        "ApiLogOffRequestDTO": {
            "id": "ApiLogOffRequestDTO",
            "type": "object",
            "description": "request to delete a session (log off)",
            "properties": {
                "UserName": {
                    "type": "string",
                    "description": "user name of the session to delete (log off)."
                },
                "Session": {
                    "type": "string",
                    "description": "session identifier of the session to delete (log off)."
                }
            }
        },
        "ListMarketInformationRequestDTO": {
            "id": "ListMarketInformationRequestDTO",
            "type": "object",
            "description": "Get market information for a list of markets.",
            "properties": {
                "MarketIds": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "The list of market ids"
                }
            }
        },
        "ApiTradeOrderResponseDTO": {
            "id": "ApiTradeOrderResponseDTO",
            "type": "object",
            "description": "The response from the trade request",
            "properties": {
                "Status": {
                    "type": "integer",
                    "description": "The status of the order (Pending, Accepted, Open, etc)",
                    "demoValue": 1
                },
                "StatusReason": {
                    "type": "integer",
                    "description": "The id corresponding to a more descriptive reason for the order status",
                    "demoValue": 1
                },
                "OrderId": {
                    "type": "integer",
                    "description": "The unique identifier associated to the order returned from the underlying trading system",
                    "demoValue": 1
                },
                "Orders": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiOrderResponseDTO"
                    },
                    "description": "List of orders with their associated response"
                },
                "Quote": {
                    "$ref": "#.ApiQuoteResponseDTO",
                    "description": "Quote response"
                }
            }
        },
        "ApiQuoteResponseDTO": {
            "id": "ApiQuoteResponseDTO",
            "type": "object",
            "description": "quote response.",
            "properties": {
                "QuoteId": {
                    "type": "integer",
                    "description": "quote id."
                },
                "Status": {
                    "type": "integer",
                    "description": "quote status."
                },
                "StatusReason": {
                    "type": "integer",
                    "description": "quote status reason."
                }
            }
        },
        "ApiLogOnResponseDTO": {
            "id": "ApiLogOnResponseDTO",
            "type": "object",
            "description": "Response to a CreateSessionRequest",
            "properties": {
                "Session": {
                    "type": "string",
                    "description": "Your session token (treat as a random string) <BR /> Session tokens are valid for a set period from the time of their creation. <BR /> The period is subject to change, and may vary depending on who you logon as.",
                    "demoValue": "D2FF3E4D-01EA-4741-86F0-437C919B5559",
                    "minLength": 36,
                    "maxLength": 100
                }
            }
        },
        "ListMarketInformationResponseDTO": {
            "id": "ListMarketInformationResponseDTO",
            "type": "object",
            "description": "Response from am market information request.",
            "properties": {
                "MarketInformation": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiMarketInformationDTO"
                    },
                    "description": "The requested list of market information."
                }
            }
        },
        "AccountInformationResponseDTO": {
            "id": "AccountInformationResponseDTO",
            "type": "object",
            "description": "response from an account information query.",
            "properties": {
                "LogonUserName": {
                    "type": "string",
                    "description": "logon user name."
                },
                "ClientAccountId": {
                    "type": "integer",
                    "description": "client account id."
                },
                "ClientAccountCurrency": {
                    "type": "string",
                    "description": "Base currency of the client account."
                },
                "TradingAccounts": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiTradingAccountDTO"
                    },
                    "description": "a list of trading accounts."
                }
            }
        },
        "NewStopLimitOrderRequestDTO": {
            "id": "NewStopLimitOrderRequestDTO",
            "type": "object",
            "description": "A request for a stop/limit order",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "Order identifier of the order to update"
                },
                "MarketId": {
                    "type": "integer",
                    "description": "A market's unique identifier",
                    "demoValue": 71442,
                    "minimum": 1000000,
                    "maximum": 9999999
                },
                "Currency": {
                    "type": "string",
                    "description": "Currency to place order in"
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Flag to indicate whether the trade will automatically roll into the next market when the current market expires"
                },
                "Direction": {
                    "type": "string",
                    "description": "Direction identifier for order/trade, values supported are buy or sell",
                    "demoValue": "buy"
                },
                "Quantity": {
                    "type": "number",
                    "description": "Size of the order/trade",
                    "demoValue": 1.0
                },
                "BidPrice": {
                    "type": "number",
                    "description": "Market prices are quoted as a pair (buy/sell or bid/offer), the BidPrice is the lower of the two",
                    "demoValue": 100.0
                },
                "OfferPrice": {
                    "type": "number",
                    "description": "Market prices are quote as a pair (buy/sell or bid/offer), the OfferPrice is the higher of the market price pair",
                    "demoValue": 110.0
                },
                "AuditId": {
                    "type": "string",
                    "description": "Unique identifier for a price tick",
                    "demoValue": "5998CBE8-3594-4232-A57E-09EC3A4E7AA8"
                },
                "TradingAccountId": {
                    "type": "integer",
                    "description": "TradingAccount associated with the trade/order request",
                    "demoValue": 1
                },
                "IfDone": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiIfDoneDTO"
                    },
                    "description": "List of IfDone Orders which will be filled when the initial trade/order is triggered"
                },
                "OcoOrder": {
                    "$ref": "#.NewStopLimitOrderRequestDTO",
                    "description": "Corresponding OcoOrder (One Cancels the Other)"
                },
                "Applicability": {
                    "type": "string",
                    "description": "Identifier which relates to the expiry of the order/trade, i.e. GoodTillDate (GTD), GoodTillCancelled (GTC) or GoodForDay (GFD)",
                    "demoValue": "GTC",
                    "format": "wcf-date"
                },
                "ExpiryDateTimeUTC": {
                    "type": "string",
                    "description": "The associated expiry DateTime for a pair of GoodTillDate IfDone orders",
                    "demoValue": "\\/Date(1290164280000)\\/",
                    "format": "wcf-date"
                },
                "Guaranteed": {
                    "type": "boolean",
                    "description": "Flag to determine whether an order is guaranteed to trigger and fill at the associated trigger price"
                },
                "TriggerPrice": {
                    "type": "number",
                    "description": "Price at which the order is intended to be triggered"
                }
            }
        },
        "UpdateStopLimitOrderRequestDTO": {
            "id": "UpdateStopLimitOrderRequestDTO",
            "type": "object",
            "description": "A request for updating a stop/limit order",
            "extends": "NewStopLimitOrderRequestDTO",
            "properties": {}
        },
        "GetPriceBarResponseDTO": {
            "id": "GetPriceBarResponseDTO",
            "type": "object",
            "description": "The response from a GET price bar history request. Contains both an array of finalized price bars, and a partial (not finalized) bar for the current period",
            "properties": {
                "PriceBars": {
                    "type": "array",
                    "items": {
                        "$ref": "#.PriceBarDTO"
                    },
                    "description": "An array of finalized price bars, sorted in ascending order based on PriceBar.BarDate"
                },
                "PartialPriceBar": {
                    "$ref": "#.PriceBarDTO",
                    "description": "The (non-finalized) price bar data for the current period (i.e, the period that hasn't yet completed)"
                }
            }
        },
        "ListStopLimitOrderHistoryResponseDTO": {
            "id": "ListStopLimitOrderHistoryResponseDTO",
            "type": "object",
            "description": "Contains the result of a ListStopLimitOrderHistory query",
            "properties": {
                "StopLimitOrderHistory": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiStopLimitOrderHistoryDTO"
                    },
                    "description": "A list of historical stop / limit orders."
                }
            }
        },
        "GetMarketInformationResponseDTO": {
            "id": "GetMarketInformationResponseDTO",
            "type": "object",
            "description": "Response from am market information request.",
            "properties": {
                "MarketInformation": {
                    "$ref": "#.ApiMarketInformationDTO",
                    "description": "The requested market information."
                }
            }
        },
        "GetMessagePopupResponseDTO": {
            "id": "GetMessagePopupResponseDTO",
            "type": "object",
            "description": "Message popup response denoting whether the client application should display a popup notification at startup.",
            "properties": {
                "AskForClientApproval": {
                    "type": "boolean",
                    "description": "Should the client application ask for client approval."
                },
                "Message": {
                    "type": "string",
                    "description": "The message to display to the client."
                }
            }
        },
        "ApiErrorResponseDTO": {
            "id": "ApiErrorResponseDTO",
            "type": "object",
            "description": "This is a description of ErrorResponseDTO",
            "properties": {
                "ErrorMessage": {
                    "type": "string",
                    "description": "This is a description of the ErrorMessage property",
                    "demoValue": "sample value"
                },
                "ErrorCode": {
                    "$ref": "#.ErrorCode",
                    "description": "The error code"
                }
            }
        },
        "ListMarketInformationSearchResponseDTO": {
            "id": "ListMarketInformationSearchResponseDTO",
            "type": "object",
            "description": "Response from a market information search request.",
            "properties": {
                "MarketInformation": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiMarketInformationDTO"
                    },
                    "description": "The requested list of market information."
                }
            }
        },
        "GetOpenPositionResponseDTO": {
            "id": "GetOpenPositionResponseDTO",
            "type": "object",
            "description": "Response containing the open position.",
            "properties": {
                "OpenPosition": {
                    "$ref": "#.ApiOpenPositionDTO",
                    "description": "The open position. If it is null then the open position does not exist."
                }
            }
        },
        "ListSpreadMarketsResponseDTO": {
            "id": "ListSpreadMarketsResponseDTO",
            "type": "object",
            "description": "Contains the result of a ListSpreadMarkets query",
            "properties": {
                "Markets": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiMarketDTO"
                    },
                    "description": "A list of Spread Betting markets"
                }
            }
        },
        "ListOpenPositionsResponseDTO": {
            "id": "ListOpenPositionsResponseDTO",
            "type": "object",
            "description": "Contains the result of a ListOpenPositions query",
            "properties": {
                "OpenPositions": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiOpenPositionDTO"
                    },
                    "description": "A list of trades / open positions."
                }
            }
        },
        "ErrorCode": {
            "id": "ErrorCode",
            "type": "integer",
            "demoValue": 403,
            "description": "This is a description of the ErrorCode enum",
            "enum": [
      0,
      403,
      500,
      4000,
      4001,
      4002,
      4003,
      4004,
      4010,
      4011,
      5001
    ],
            "options": [
      {
          "value": 0,
          "label": "NoError",
          "description": "No error has occured"
      },
      {
          "value": 403,
          "label": "Forbidden",
          "description": "This is a description of Forbidden"
      },
      {
          "value": 500,
          "label": "InternalServerError",
          "description": "This is a description of InternalServerError"
      },
      {
          "value": 4000,
          "label": "InvalidParameterType",
          "description": "This is a description of InvalidParameterType"
      },
      {
          "value": 4001,
          "label": "ParameterMissing",
          "description": "This is a description of ParameterMissing"
      },
      {
          "value": 4002,
          "label": "InvalidParameterValue",
          "description": "This is a description of InvalidParameterValue"
      },
      {
          "value": 4003,
          "label": "InvalidJsonRequest",
          "description": "This is a description of InvalidJsonRequest"
      },
      {
          "value": 4004,
          "label": "InvalidJsonRequestCaseFormat",
          "description": "This is a description of InvalidJsonRequestCaseFormat"
      },
      {
          "value": 4010,
          "label": "InvalidCredentials",
          "description": "The credentials used to authenticate are invalid.  Either the username, password or both are incorrect."
      },
      {
          "value": 4011,
          "label": "InvalidSession",
          "description": "The session credentials supplied are invalid"
      },
      {
          "value": 5001,
          "label": "NoDataAvailable",
          "description": "There is no data available"
      }
    ]
        },
        "ListOrdersResponseDTO": {
            "id": "ListOrdersResponseDTO",
            "type": "object",
            "description": "This Dto is not currently used",
            "properties": {}
        },
        "ListCfdMarketsResponseDTO": {
            "id": "ListCfdMarketsResponseDTO",
            "type": "object",
            "description": "Contains the result of a ListCfdMarkets query",
            "properties": {
                "Markets": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiMarketDTO"
                    },
                    "description": "A list of CFD markets"
                }
            }
        },
        "ApiLogOffResponseDTO": {
            "id": "ApiLogOffResponseDTO",
            "type": "object",
            "description": "Response from a session delete request.",
            "properties": {
                "LoggedOut": {
                    "type": "boolean",
                    "description": "LogOut status",
                    "demoValue": true
                }
            }
        },
        "ListWatchlistResponseDTO": {
            "id": "ListWatchlistResponseDTO",
            "type": "object",
            "description": "Gets the client watchlist",
            "properties": {
                "ClientAccountId": {
                    "type": "integer",
                    "description": "Client account id"
                }
            }
        },
        "ListTradeHistoryResponseDTO": {
            "id": "ListTradeHistoryResponseDTO",
            "type": "object",
            "description": "Contains the result of a ListTradeHistory query",
            "properties": {
                "TradeHistory": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiTradeHistoryDTO"
                    },
                    "description": "A list of historical trades."
                }
            }
        },
        "ListActiveStopLimitOrderResponseDTO": {
            "id": "ListActiveStopLimitOrderResponseDTO",
            "type": "object",
            "description": "Contains the result of a ListActiveStopLimitOrder query",
            "properties": {
                "ActiveStopLimitOrders": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiActiveStopLimitOrderDTO"
                    },
                    "description": "The requested list of active stop / limit orders."
                }
            }
        },
        "NewTradeOrderRequestDTO": {
            "id": "NewTradeOrderRequestDTO",
            "type": "object",
            "description": "A request for a trade order",
            "properties": {
                "MarketId": {
                    "type": "integer",
                    "description": "A market's unique identifier",
                    "demoValue": 71442,
                    "minimum": 1000000,
                    "maximum": 9999999
                },
                "Currency": {
                    "type": "string",
                    "description": "Currency to place order in"
                },
                "AutoRollover": {
                    "type": "boolean",
                    "description": "Flag to indicate whether the trade will automatically roll into the next market when the current market expires"
                },
                "Direction": {
                    "type": "string",
                    "description": "Direction identifier for order/trade, values supported are buy or sell",
                    "demoValue": "buy"
                },
                "Quantity": {
                    "type": "number",
                    "description": "Size of the order/trade",
                    "demoValue": 1.0
                },
                "QuoteId": {
                    "type": "string",
                    "description": "Quote Id"
                },
                "BidPrice": {
                    "type": "number",
                    "description": "Market prices are quoted as a pair (buy/sell or bid/offer), the BidPrice is the lower of the two",
                    "demoValue": 100.0
                },
                "OfferPrice": {
                    "type": "number",
                    "description": "Market prices are quote as a pair (buy/sell or bid/offer), the OfferPrice is the higher of the market price pair",
                    "demoValue": 110.0
                },
                "AuditId": {
                    "type": "string",
                    "description": "Unique identifier for a price tick",
                    "demoValue": "5998CBE8-3594-4232-A57E-09EC3A4E7AA8"
                },
                "TradingAccountId": {
                    "type": "integer",
                    "description": "TradingAccount associated with the trade/order request",
                    "demoValue": 1
                },
                "IfDone": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiIfDoneDTO"
                    },
                    "description": "List of IfDone Orders which will be filled when the initial trade/order is triggered"
                },
                "Close": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "description": "List of existing order id's that require part or full closure"
                }
            }
        },
        "UpdateTradeOrderRequestDTO": {
            "id": "UpdateTradeOrderRequestDTO",
            "type": "object",
            "description": "A request for updating a trade order",
            "extends": "NewTradeOrderRequestDTO",
            "properties": {
                "OrderId": {
                    "type": "integer",
                    "description": "Order identifier of the order to update"
                }
            }
        },
        "GetNewsDetailResponseDTO": {
            "id": "GetNewsDetailResponseDTO",
            "type": "object",
            "description": "JSON returned from News Detail GET request",
            "properties": {
                "NewsDetail": {
                    "$ref": "#.NewsDetailDTO",
                    "description": "The details of the news item"
                }
            }
        },
        "ApiLookupResponseDTO": {
            "id": "ApiLookupResponseDTO",
            "type": "object",
            "description": "Gets the lookup entities from trading database given the lookup name and culture id",
            "properties": {
                "CultureId": {
                    "type": "integer",
                    "description": "The culture id requested"
                },
                "LookupEntityName": {
                    "type": "string",
                    "description": "The lookup name requested"
                },
                "ApiLookupDTOList": {
                    "type": "array",
                    "items": {
                        "$ref": "#.ApiLookupDTO"
                    },
                    "description": "List of lookup entities from the database"
                }
            }
        },
        "ApiIfDoneResponseDTO": {
            "id": "ApiIfDoneResponseDTO",
            "type": "object",
            "description": "if done",
            "properties": {
                "Stop": {
                    "$ref": "#.ApiOrderResponseDTO",
                    "description": "Stop"
                },
                "Limit": {
                    "$ref": "#.ApiOrderResponseDTO",
                    "description": "Limit"
                }
            }
        },
        "SystemStatusDTO": {
            "id": "SystemStatusDTO",
            "type": "object",
            "description": "system status",
            "properties": {
                "StatusMessage": {
                    "type": "string",
                    "description": "a status message"
                }
            }
        },
        "SystemStatusRequestDTO": {
            "id": "SystemStatusRequestDTO",
            "type": "object",
            "description": "system status request.",
            "properties": {
                "TestDepth": {
                    "type": "string",
                    "description": "depth to test."
                }
            }
        }
    }
}
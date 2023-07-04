import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

const MOCK_DATA = {
    graphData: {
        views: {
            "2021-06-01": 100,
            "2021-06-02": 200,
            "2021-06-03": 300,
            "2021-06-04": 400,
        }
    },
    top_locations: [
        {
            "country": "United States",
            "percentage": 50,
            "count": 50,
        },
        {
            "country": "United Kingdom",
            "percentage": 30,
            "count": 30,
        },
        {
            "country": "Canada",
            "percentage": 20,
            "count": 20,
        },
    ],
    top_sources: [
        {
            "source": "google",
            "percentage": 50,
            "count": 50,
        },
        {
            "source": "twitter",
            "percentage": 30,
            "count": 30,
        },
        {
            "source": "facebook",
            "percentage": 20,
            "count": 20,
        },
    ]
}

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}));

describe("Dashboard", () => {
    it('renders the dashboard page', async() => {
        render(<Home />)
        await waitFor(() => {
            expect(screen.getByText('Dashboard')).toBeInTheDocument()
            expect(screen.getByText('Page Views')).toBeInTheDocument()
        })
        
    })
})
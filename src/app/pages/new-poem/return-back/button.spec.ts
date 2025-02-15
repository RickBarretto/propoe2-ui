import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ReturnButton } from "./button"

describe("BackBtnComponent", () => {
    let component: ReturnButton
    let fixture: ComponentFixture<ReturnButton>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReturnButton],
        })
            .compileComponents()

        fixture = TestBed.createComponent(ReturnButton)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
